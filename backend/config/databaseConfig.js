const mongoose = require("mongoose");

/**
 * Function create a connection to the blackjack collection in the mongo database
 */
const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log("Connected to Database");
  } catch (error) {
    console.error(error);
    // close database connection
    process.exit(1);
  }
};

module.exports = connectToDatabase;
