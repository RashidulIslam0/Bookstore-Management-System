const express = require("express");
const router = express.Router(); // Use Router from Express
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(404).json({ message: "Invalid Admin" });
  } else {
    jwt.verify(token, process.env.ADMIN_KEY, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      } else {
        req.email = decoded.email;
        req.role = decoded.role;
        next();
      }
    });
  }
};

module.exports = verifyAdmin;
