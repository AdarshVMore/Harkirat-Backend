const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const SECRET_KEY = "itIsASecret";
const allUsers = [];

app.use(express.json());

app.post("/signin", (req, res) => {
  const creds = req.body;
  const username = creds.username;
  allUsers.push(username);
  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });

  res.json(token);
});

app.post("/users", (req, res) => {});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
