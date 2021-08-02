const User = require("../models/user");

exports.postAddHobby = (req, res, next) => {
  const title = req.body.title;
  const imgUrl = req.body.imgUrl;
  const description = req.body.description;
  User.findOne({ where: { id: req.userId } })
    .then((user) => {
      console.log("hey");
      user.createHobby({ title, imgUrl, description });
    })
    .then((results) => res.send("Hobby is created succesfully"))
    .catch((err) => console.log(err));
};
exports.getHobby = (req, res, next) => {
  User.findOne({ where: { id: req.userId } })
    .then((user) => user.getHobbies())
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};
