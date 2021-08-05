const express = require("express");
const app = express();
const port = 3001;

const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const bodyParser = require("body-parser");

const userRouter = require("./routes/router");

// Database
const db = require("./util/database");
const passport = require("passport");


const initPassport = require("./util/passport-config");
initPassport(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use(
  session({
    secret: "MySecret",
    store: new SequelizeStore({
      db: db,
    }),
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    proxy: true, // if you do SSL outside of node.
  })
);

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

db.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Hey U did it ! remember Code Once Think Twice http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
