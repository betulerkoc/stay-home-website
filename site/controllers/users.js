const User = require("../models/user");

exports.getUsers = async (req, res, next) => {
  const users = await User.findAll();
  res.send(users)
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

exports.postSignUp = async (req, res, next) => {
  console.log(req.body);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const user = User.build({email,password,firstName,lastName})
  try{
    await user.save()
    res.send(user)
  }catch(err){
    res.status(400).send(err)
  }
};

exports.postSignIn =  async (req, res, next) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({where :{email}});

  if(user?.password === password){
    res.send(user);
  }else{
    res.status(400).send("Incorrect username or password");
  }
};
