exports.postAddHobby = (req, res, next) => {
  console.log(req.body);
  const title = req.body.title;
  const imgUrl = req.body.imgUrl;
  const description = req.body.description;
  req.user
    .createHobby({ title, imgUrl, description })
    .then((results) => res.send("Hobby is created succesfully"))
    .catch((err) => console.log(err));
};
exports.getHobby = (req, res, next) => {
  req.user
    .getHobbies()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};
