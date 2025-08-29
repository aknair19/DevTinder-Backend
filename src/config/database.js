const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://aknair969:UT4aZDpb81E9uY4T@cluster0.hrcm1.mongodb.net/devtinder"
  );
};

module.exports = connectDB;
