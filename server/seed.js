const express = require("express");
const bcrypt = require("bcrypt");

const admin = requir("./models/adminModels.js");
app.post("/register", async (req, res) => {
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

    res.status(201).json({ message: "User account created successfully" });
  } catch (error) {
    console.error("Error creating user account:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
