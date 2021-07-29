const express = require("express");
const dotenv = require("dotenv");

const PORT = 8000;
const connectToDatabase = require("./config/databaseConfig");
const userRouter = require("./routes/userRoutes");

// get environment variable(s)
dotenv.config();
// connect to MongoDB
connectToDatabase();

// setup express middleware to handle routing
const server = express();

// accept incoming request object to server as JSON
server.use(express.json());
``
server.get("/", (req, res) => {
  res.send("Server is running...");
});

// mount the route(s)
server.use("/api/users", userRouter);

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost: ${PORT}`);
});
