const express = require("express");
const WebSocketServer = require("ws").Server; // Correcting WebSocktServer to WebSocketServer
const app = express();

const port = 8080;

const server = app.listen(port, () => {
  console.log("Server running on port " + port);
});

const wss = new WebSocketServer({ server }); // Fixing the typo

wss.on("connection", (ws) => {
  ws.on("message", (msg) => {
    console.log("Message from client: %s", msg); // Fixing "clint" typo to "client"
    ws.send("ye le response"); // Sending a response
  });
});
