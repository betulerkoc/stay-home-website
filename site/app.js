const express = require("express");
const app = express();
const port = 3001;

const path = require("path");
const bodyParser = require("body-parser");

const userRouter = require("./routes/users");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/", (req, res, next) => {
//   res.render("index.ejs");
// });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
