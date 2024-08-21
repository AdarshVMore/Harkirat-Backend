const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Admin = new mongoose.model("Admin", AdminSchema);

module.exports = Admin;
