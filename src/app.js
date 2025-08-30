const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user.model");
app.use(express.json());

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
  const user = new User(req.body);

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

app.get("/user", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.find({ email: email });

    if (!user) {
      res.status(404).json({
        message: "user not found",
      });
    }

    return res.status(200).json({
      message: "user found",
      data: user,
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      message: "something went wrong",
      error: error.message,
    });
  }
});

app.get("/feed", async (req, res) => {
  try {
    const user = await User.find({});

    return res.status(200).json({
      message: "user found",
      data: user,
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      message: "something went wrong",
      error: error.message,
    });
  }
});

app.delete("/user", async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await User.findByIdAndDelete({ _id: userId });

    return res.json({
      message: "user has been deleted",
      data: user,
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      message: "something went wrong",
      error: error.message,
    });
  }
});

app.patch("/user", async (req, res) => {
  const { firstName, password, userId } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      { _id: userId },
      { firstName, password }
    );

    return res.json({
      message: "user has been deleted",
      data: user,
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      message: "something went wrong",
      error: error.message,
    });
  }
});
