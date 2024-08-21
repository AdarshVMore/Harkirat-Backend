const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(express.json());

const allTodos = [];

const corsOptions = {
  origin: "http://localhost:3001",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("hii");
});

app.post("/add-todo", (req, res) => {
  try {
    const todo = req.body;
    res.send(todo);
    console.log(todo);
    allTodos.push(todo);
  } catch (err) {
    console.log(err);
  }
});

app.get("/get-todo", (req, res) => {
  res.json(allTodos);
});

app.listen(port, (req, res) => {
  console.log("backend working on port " + port);
});
