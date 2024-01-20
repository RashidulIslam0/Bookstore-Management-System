const express = require("express");
const router = express.Router(); // Use Router from Express
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const admin = require("../models/adminModels");

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await admin.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new admin({
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Use status code 200 for successful response
    res
      .status(200)
      .json({ message: "User account created successfully", newUser });
  } catch (error) {
    console.error("Error creating user account:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Login route

router.post("/login", async (req, res) => {
  const { email, password, role } = req.body;

  if (role === "admin") {
    try {
      const foundAdmin = await adminModel.findOne({ email });

      if (!foundAdmin) {
        return res.status(401).json({ message: "Admin not registered" });
      }

      const isPasswordValid = await bcrypt.compare(
        password,
        foundAdmin.password
      );

      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const token = jwt.sign(
        { email: foundAdmin.email, role: "admin" },
        process.env.ADMIN_KEY
      );

      res.cookie("token", token, { httpOnly: true, secure: true });
      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      console.error("Error during admin login:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (role === "student") {
    // Implement student login logic here
  } else {
    res.status(400).json({ error: "Invalid role" });
  }
});

module.exports = router;
