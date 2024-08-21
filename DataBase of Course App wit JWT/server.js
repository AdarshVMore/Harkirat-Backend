// import Admin from "./models/Admin";
// import User from "./models/Users";
// import Course from "./models/Courses";

const Admin = require("./models/Admin");
const User = require("./models/Users");
const Course = require("./models/Courses");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://adarshisworking:qedqxFG6WDfZlaD1@100xdevs.iwoue.mongodb.net"
);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongoose connected to MongoDB");
});

db.once("open", () => {
  console.log("connected to mongoDB");
});

const express = require("express");
const jwt = require("jsonwebtoken");
const { errors } = require("ethers");

const app = express();
const jwtPass = "12345678";

app.use(express.json());

// Admin

app.post("/admin/signup", async (req, res) => {
  try {
    const existingAdmin = await Admin.findOne({ username: req.body.username });
    if (existingAdmin) {
      return res.status(403).json({ msg: "Admin already exists" });
    }

    const username = req.body.username;
    const password = req.body.password;
    const token = jwt.sign({ username }, jwtPass);

    await Admin.create({ username, password }); // Await the creation to ensure it's saved
    console.log("Admin created");
    return res.json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
});
app.post("/admin/courses", async (req, res) => {
  const token = req.headers.token;
  const courseTitle = req.body.CourseTitle;
  const courseDecs = req.body.CourseDecs;
  const coursePrice = req.body.CoursePrice;
  const courseImg = req.body.CourseImg;
  console.log(token, courseTitle, coursePrice, courseImg);
  try {
    const decoded = jwt.verify(token, jwtPass);
    console.log(decoded);
    let createdCourse = {};
    Admin.findOne({ username: decoded.username }).then(async (res) => {
      createdCourse = await Course.create({
        title: courseTitle,
        description: courseDecs,
        price: coursePrice,
        imageLink: courseImg,
      });
      console.log("Course Created", createdCourse);
    });
    res.json({
      message: "Course Created with id : ",
      courseId: createdCourse.imageLink,
    });
  } catch (error) {
    console.log(error);
  }
});
app.get("/admin/courses", (req, res) => {});

// Users

app.post("/users/signup", (req, res) => {});
app.get("/users/courses", (req, res) => {});
app.post("/users/courses/:courseID", (req, res) => {});
app.get("/users/purchasedCourse", (req, res) => {});

app.listen(5000, () => {
  console.log("listening to port 5000");
});
