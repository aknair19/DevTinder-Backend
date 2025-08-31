const express = require("express");
const connectDB = require("./config/database");
const validator = require("validator");
const app = express();
const bcrypt = require("bcrypt");
const User = require("./models/user.model");
const { validate } = require("./utils/validation");
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
  try {
    //validate the data
    validate(req.body);
    const { firstName, lastName, email, password } = req.body;

    //Encrypt the password

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    // creating a new instance of user model
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await user.save();

    return res.status(200).json({ message: "user has been created" });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      message: "something went wrong",
      error: error.message,
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!validator.isEmail(email)) {
      throw new Error("email is not valid");
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      throw new Error("Invalid credentials");
    } else {
      res.status(200).json({
        success: true,
        message: "Login successful",
      });
    }
  } catch (error) {
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
  const { firstName, password } = req.body;
  const { userId } = req.params;
  try {
    const allowedUpdates = ["photoUrl", "about", "gender", "age", "skills"];

    const isUpdateAllowed = Object.keys(req.body).every((k) =>
      allowedUpdates.includes(k)
    );

    if (!isUpdateAllowed) {
      throw new Error("Update is not allowed");
    }

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
