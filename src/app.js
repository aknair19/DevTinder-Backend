const express = require("express");

const app = express();

app.use((req, res) => {
  res.send("Hello from ");
});

app.listen(8080, () => {
  console.log("Listening to PORT 8080");
});
