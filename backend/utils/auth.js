const jwt = require("jsonwebtoken");
const { jwtConfig } = require("../config");
const  User  = require("../models/userModel");

const { secret, expiresIn } = jwtConfig;

// sets the JWT cookie after a user has logged in or signed up by taking the response
// and then generates a JWT using the imported secret from the .env file. The secret will be
// expire after a the time we set is up
const setTokenCookie = (res, user) => {
  // Create the token.
  const token = jwt.sign(
    { data: user.username },
    secret,
    { expiresIn: parseInt(expiresIn) } // 604,800 seconds = 1 week
  );

  const isProduction = process.env.NODE_ENV === "production";

  // Set the token cookie
  res.cookie("token", token, {
    maxAge: expiresIn * 1000, // maxAge in milliseconds
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction && "Lax",
  });

  return token;
};

// middleware function to authenticate certain routes
// will restore the session user based on the contents of the JWT cookie
const restoreUser = (req, res, next) => {
  // token parsed from cookies
  const { token } = req.cookies;
  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      return next();
    }

    try {
        const username  = jwtPayload.data;
        // console.log(username, "data")
      req.user = await User.findOne({username});
    } catch (e) {
      res.clearCookie("token");
      return next();
    }
    // console.log(req.user, "req user")
    if (!req.user) res.clearCookie("token");

    return next();
  });
};


module.exports = { setTokenCookie, restoreUser};