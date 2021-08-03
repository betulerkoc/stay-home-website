const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.getUsers = async (req, res, next) => {
  const users = await User.findAll();
  console.log(req.user);
  res.send(users);
};
exports.getAddUser = (req, res, next) => {
  res.render("add-user.ejs");
};

exports.postSignUp = async (req, res, next) => {
  console.log(req.body);
  const fullName = req.body.fullName;
  const location = req.body.location;
  const email = req.body.email;
  const password = req.body.password;
  const volunteerORpatient = req.body.volunteerORpatient;
  const user = User.build({ email, password, fullName, location, volunteerORpatient });
  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.postSignIn = async (req, res, next) => {
  req.session.user = req.user;
  const token = jwt.sign(
    {
      email: req.user.email,
      userId: req.user.id.toString(),
    },
    "somesupersecretsecret",
    { expiresIn: "1h" }
  );
  res.status(200).json({
    token: token,
    userId: req.user.id,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email,
  });
};
