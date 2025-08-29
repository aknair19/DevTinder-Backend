const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user.model");
connectDB()
  .then(() => {
    console.log("Database connected");
    app.listen(8080, () => {
      console.log("Listening to PORT 8080");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/signup", async (req, res) => {
  // const { firstName, lastName, emailId, password } = req.body;

  // creating a new instance of user model
  const user = new User({
    firstName: "Abhishek",
    lastName: "Nair",
    emailId: "abhisheknair1441@gmail.com",
    password: "sharanam",
  });
  try {
    await user.save();

    return res.status(200).json({ message: "user has been created" });
  } catch (err) {
    console.log(error);

    res.status(400).json({
      message: "something went wrong",
      error: error.message,
    });
  }
});

app.use(express.json());
