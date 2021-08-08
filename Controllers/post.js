const PostDB = require("../models/PostDB");
const User = require("../models/userDB");
const { post } = require("../routes/router");

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



exports.getMyPosts = async (req, res, next) => {
  const patientID = req.body.patient_id;
  const myPosts = await PostDB.findAll({
    where: {
      patient_id: patientID
    },
  });

  res.send(myPosts);
};


exports.postVolunteerApplied = async (req, res, next) => {

  const postID = req.body.postID

  const post = await PostDB.findOne({where:{
    annotation_id : postID
  }})

  //update the post row that is applied to true
  await PostDB.update({isApplied: true}, {
    where: {
      annotation_id : postID
    }
  })

  const postOwnerID = post.patient_id

  res.send({
    "postOwnerID": postOwnerID
  })

}

// to get contact info after volunteer clicks apply
exports.getContactInfo = async (req, res , next) => {


  try{
  const postOwnerID = req.params.ownerID

  const postOwner = await User.findOne({where: {
    id : postOwnerID
  }})

  res.status(200).json({
    email : postOwner.email,
    phoneNumber : postOwner.phoneNumber

  }
  )
    } catch(e){res.status(400).send(e)}

} 

exports.updatePost = async (req, res, next) => {
  const patient_id = req.body.patient_id;
  const number_of_family = req.body.number_of_family;
  const number_of_days = req.body.number_of_days;
  const type_of_need = req.body.type_of_need;
  const location = req.body.location;
  try {
    await PostDB.update(
      {
        patient_id,
        number_of_family,
        number_of_days,
        type_of_need,
        location,
      },
      {
        where: { annotation_id: req.body.annotation_id },
      }
    );
    res.send("success");
  } catch (error) {
    console.log(error);
  }
};

exports.deleteSpecificPost = async (req, res, next) => {
  await PostDB.destroy({
    where: {
      annotation_id: req.params.id,
    },
  });
  res.send("success");
};
