const express = require("express");
const { authUser, addNewUser } = require("../controllers/userController");

const userRouter = express.Router();

// POST request for /api/users/
userRouter.post("/", addNewUser);

// POST request for /api/users/login
userRouter.post("/login", authUser);

module.exports = userRouter;
