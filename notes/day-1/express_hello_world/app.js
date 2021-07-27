const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.end("Hello world!");
});

app.get("/abc", (req, res) => {
  res.end("You're in abc!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
