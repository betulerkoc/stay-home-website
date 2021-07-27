const User = require("../models/user");

exports.getUsers = (req, res, next) => {
  res.render("index.ejs");
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
