const express = require("express");
const dotenv = require("dotenv");

const PORT = 8000;
const connectToDatabase = require("./config/databaseConfig");

// get environment variable(s)
dotenv.config();
// connect to MongoDB
connectToDatabase();

// setup express middleware to handle routing
const server = express();

// accept incoming request object to server as JSON
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Blackjack server is running...");
});

server.listen(PORT, function () {
  console.log(`Server listening on http://localhost: ${PORT}`);
});
