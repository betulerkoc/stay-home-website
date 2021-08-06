const express = require("express");
const passport = require("passport");
const router = express.Router();

const PostDB = require("../models/PostDB");

const usersControllers = require("../Controllers/users");
const controllerPost = require("../Controllers/post");

router.get("/", usersControllers.getUsers);

router.post("/sign-up", usersControllers.postSignUp);

router.post(
  "/log-in",
  passport.authenticate("local", {
    session: false,
    failureRedirect: "/sign-up",
  }),
  usersControllers.postSignIn
);

router.post("/patient-post", controllerPost.addPost);

router.get("/patient-post", controllerPost.getPosts);

router.put("/patient-post/update", controllerPost.updatePost);

router.delete("/patient-post/del/:id", controllerPost.deleteSpecificPost);

// router.put("/patient-post/update", (req, res) => {
//   const patient_id = req.body.patient_id;
//   const number_of_family = req.body.number_of_family;
//   const number_of_days = req.body.number_of_days;
//   const type_of_need = req.body.type_of_need;
//   const location = req.body.location;
//   PostDB.update(
//     {
//       patient_id,
//       number_of_family,
//       number_of_days,
//       type_of_need,
//       location,
//     },
//     {
//       where: { annotation_id: req.body.annotation_id }
//     }
//   ).then(() => res.send("success"));
// });

//exports
module.exports = router;
