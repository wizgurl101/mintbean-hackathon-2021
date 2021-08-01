const express = require("express");
const { authUser, addNewUser } = require("../controllers/userController");
const { setTokenCookie, restoreUser } = require("../utils/auth")

const userRouter = express.Router();

// POST request for /api/users/
userRouter.post("/", addNewUser);

// POST request for /api/users/login
userRouter.post("/login", authUser);

// Restore user Session
userRouter.get("/restore", restoreUser, (req, res) => {
  const { user } = req;
  if (user) {
    return res.json({
      user: user
    });
  } else return res.json({});
});

// Logout Out User (logged out by clearing cookie)
userRouter.delete("/logout" , (req, res) => {
  res.clearCookie("token")
  return res.json({message: "Logged Out Successfully"})
})

module.exports = userRouter;
