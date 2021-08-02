const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { setTokenCookie, restoreUser } = require("../utils/auth");

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
    // come back to fix ---
    await setTokenCookie(res, validUser);
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

/**
 * @desc Get leader board info
 * @route GET /api/users/leaderboard
 * @access Public
 */
const getLeaderBoardInfo = asyncHandler(async (req, res) => {
  const NUMBER_OF_TOP_PLAYERS = 10;

  const users = await User.find()
    .sort({ numOfGameWon: -1 })
    .select("-password")
    .limit(NUMBER_OF_TOP_PLAYERS);

  if (users) {
    res.json(users);
  } else {
    res.status(400);
    throw new Error("No users in database");
  }
});

/**
 * @desc Update user number of game won
 * @route PUT /api/users/updateGameStat
 * @access Public
 */
const updateUserNumberOfGameWon = asyncHandler(async (req, res) => {
  const { username } = req.body;

  const user = await User.findOne({ username });

  // if user exists
  if (user) {
    // increment user number of game won by one
    user.numOfGameWon = user.numOfGameWon + 1;

    // save updated card
    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      numOfGameWon: updatedUser.numOfGameWon,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

module.exports = {
  authUser: authUser,
  addNewUser: addNewUser,
  getLeaderBoardInfo: getLeaderBoardInfo,
  updateUserNumberOfGameWon: updateUserNumberOfGameWon,
};
