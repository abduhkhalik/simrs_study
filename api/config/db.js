const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connect ..!!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connect };
