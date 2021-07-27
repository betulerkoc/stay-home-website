const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
const bodyParser = require("body-parser");

const userRouter = require("./routes/users");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRouter);

// app.get("/", (req, res, next) => {
//   res.render("index.ejs");
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
