const express = require("express");
const { authUser, addNewUser } = require("../controllers/userController");
const { setTokenCookie, restoreUser } = require("../utils/auth")

const userRouter = express.Router();

// POST request for /api/users/
userRouter.post("/", addNewUser);

// POST request for /api/users/login
userRouter.post("/login", authUser);

userRouter.get("/restore", restoreUser, (req, res) => {
  const { user } = req;
//   console.log(user,)
  if (user) {
    return res.json({
      user: user
    });
  } else return res.json({});
});

module.exports = userRouter;
