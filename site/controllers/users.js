const User = require("../models/user");

exports.getUsers = (req, res, next) => {
  User.fetchUsers().then((users) => {
    res.status(200).json(users);
  });
};
exports.getAddUser = (req, res, next) => {
  res.render("add-user.ejs");
};
exports.postAddUser = (req, res, next) => {
  console.log(req.body);
  const fullName = req.body.fullName;
  const email = req.body.email;
  const user = new User(null, fullName, email);
  user.save();
  console.log(user);
  res.redirect("/");
};

exports.postSignUp = (req, res, next) => {
  console.log(req.body);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const user = new User(null, firstName, lastName, email, password);
  user
    .save()
    .then(() => {
      res.status(201).json({
        message: "the user is created",
        user,
      });
    })
    .catch((err) => console.log(err));
};

exports.postSignIn = (req, res, next) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  User.singIn(email, password, (user) => {
    console.log(user);
    res.status(201).json({
      message: "the user is signed in",
      user,
    });
  });
};
