const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  numOfGameWon: {
    type: Number,
    default: 0,
  },
});

/**
 * Use mongoose matchPassword method to check that user enter a valid password
 */
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

/**
 * Use bcrypt middleware to encrpyt user password in database
 */
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  // calls the next middleware
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
