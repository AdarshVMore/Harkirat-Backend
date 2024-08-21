const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
  imageLink: String,
});

const Course = new mongoose.model("Course", CourseSchema);

module.exports = Course;
