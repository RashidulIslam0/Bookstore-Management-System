const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    roll: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const student = mongoose.model("Student", studentSchema);

module.exports = student;
