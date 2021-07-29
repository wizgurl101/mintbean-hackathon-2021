const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

/**
 * @desc Authorization of user login
 * @route POST /api/users/login
 * @access Public
 */
const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const validUser = await User.findOne({ username });

  const validPassword = await validUser.matchPassword(password);

  // if user enter valid username and password
  if (validUser && validPassword) {
    res.json({
      username: validUser.username,
    });
  } else {
    res.status(401);
    throw new Error("Invalid username or password");
  }
});

/**
 * @desc Add new user
 * @route POST /api/users/
 * @access Public
 */
const addNewUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // check that username is not already taken
  const validUser = await User.findOne({ username });

  // if username already exist in database
  if (validUser) {
    res.status(400);
    throw new Error("Username already taken.");
  }

  // if username is not taken, create new user
  const newUser = await User.create({ username, password });

  // user been successfully created
  if (newUser) {
    res.status(201).json({
      name: newUser.name,
      message: "New account created.",
    });
  } else {
    res.status(400);
    throw new Error("Unable to create account.");
  }
});

module.exports = { authUser: authUser, addNewUser: addNewUser };
