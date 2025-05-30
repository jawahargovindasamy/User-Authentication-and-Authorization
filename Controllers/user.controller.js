import User from "../Models/user.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Function to handle user registration
export const registerUser = async (req, res) => {
  try {
    const { userName, userEmail, userPassword } = req.body;
    const hashedPassword = await bcrypt.hash(userPassword, 10);
    const newUser = new User({
      userName,
      userEmail,
      userPassword: hashedPassword,
    });
    await newUser.save();
    res.status(200).json({
      message: "Registration data received successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error while registering user",
      error: error.message,
    });
  }
};

// Function to handle user login
export const loginUser = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;
    const user = await User.findOne({ userEmail });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const ispasswordValid = await bcrypt.compare(
      userPassword,
      user.userPassword
    );
    if (!ispasswordValid) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });
    user.token = token;
    await user.save();

    res.status(200).json({
      message: "Login successful",
      token: user.token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error while logging in user",
      error: error.message,
    });
  }
};


//Function to Get User Details
export const getUser=async(req,res)=>{
  try {
    const users=await User.find();
    res.status(200).json({
      message: "User details retrieved successfully",
      data: users,
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error while getting user details",
      error: error.message,
    });
  }
}
