const express = require("express");
// const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./DB/db");

const adminRouter = require("./routes/adminRoutes");
const studentRouter = require("./routes/studentRoutes"); // Import the userRouter
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const PORT = 3000;

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/student", studentRouter);

app.get("/", (req, res) => {
  res.send("Hello Wordl");
});
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Not found</h1>");
});

app.listen(PORT, async () => {
  console.log(`server is running at http://localhost:${PORT}`);
  await connectDB();
});
