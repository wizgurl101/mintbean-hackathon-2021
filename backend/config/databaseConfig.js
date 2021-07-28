const mongoose = require("mongoose");

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
