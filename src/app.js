const express = require("express");
const connectDB = require("./config/database");
const app = express();

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

app.use(express.json());
