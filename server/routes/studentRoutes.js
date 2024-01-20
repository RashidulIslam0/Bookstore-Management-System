const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Student = require("../models/StudentModels");
router.post("/register", async (req, res) => {
  try {
    const { roll, name, email, password, grade } = req.body;

    // Check if the email is already registered
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new student
    const newStudent = new Student({
      roll,
      name,
      email,
      password: hashedPassword,
      grade,
    });

    // Save the student to the database
    await newStudent.save();

    // Use status code 201 for successful response (created)
    res
      .status(201)
      .json({ message: "Student account created successfully", newStudent });
  } catch (error) {
    console.error("Error creating student account:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
