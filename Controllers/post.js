const PostDB = require("../models/PostDB");

exports.addPost = async (req, res, next) => {
  console.log(req.body);
  const patient_id = req.body.patient_id;
  const number_of_family = req.body.number_of_family;
  const number_of_days = req.body.number_of_days;
  const type_of_need = req.body.type_of_need;
  const location = req.body.location;
  const isApplied = false;
  const newPost = PostDB.build({
    patient_id,
    number_of_family,
    number_of_days,
    type_of_need,
    location,
    isApplied
  });
  try {
    await newPost.save();
    res.send(newPost);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getPosts = async (req, res, next) => {
  const posts = await PostDB.findAll({
    where: {
      isApplied: false
    }
  });
  console.log(req.post);
  res.send(posts);
};
