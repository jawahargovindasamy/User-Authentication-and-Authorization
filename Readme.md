# 🛡️ User Authentication & Authorization API

This is a **User Authentication and Authorization API** built using **Node.js, Express.js, MongoDB (Mongoose), JWT,** and following the MVC pattern.

## 🚀 Features

✅ User registration with hashed password
✅ User login with JWT generation
✅ Secure protected routes using JWT
✅ Retrieve user information from token
✅ Proper error handling and validation
✅ RESTful API design
✅ MongoDB integration with Mongoose
✅ Well-structured codebase (MVC pattern)

## 📖 API Documentation

The Postman API documentation can be found [here](https://documenter.getpostman.com/view/16422115/UzJNRV6r).

## 🌐 API Endpoints

### POST api/user/register

Register a new user.

### POST api/user/login

Login an existing user and receive a JWT token.

### GET api/user/getdata

Retrieve user data (protected route, requires token).

## ⚙️ Setup Instructions

1️⃣**Clone the repository**

2️⃣**Install dependencies:**
```bash
npm install
```
3️⃣**Configure environment variables:**
Create a .env file and add:
PORT and MONGODB_URL and JWT_SECRET

4️⃣**Start the server:**
```bash
npm run dev
```
Or:
```bash
node start
```

## 🧱 Technologies Used

Node.js
Express.js
MongoDB (Mongoose)
JWT (jsonwebtoken)
bcrypt
dotenv