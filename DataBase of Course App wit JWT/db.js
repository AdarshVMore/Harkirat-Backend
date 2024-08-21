const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://adarshisworking:qedqxFG6WDfZlaD1@100xdevs.iwoue.mongodb.net",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000, // 30 seconds
    socketTimeoutMS: 45000, // 45 seconds
  }
);

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("Mongoose disconnected from MongoDB");
});

module.exports = db;
