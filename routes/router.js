const express = require("express");
const passport = require("passport");
const router = express.Router();

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

//create new post
router.post("/patient-post", controllerPost.addPost);

//get all posts where isApplied = false
router.get("/patient-post", controllerPost.getPosts);

//get only posts of the patient signen in
router.get("/getMyPosts", controllerPost.getMyPosts);

router.post("/volunteer-applied", controllerPost.postVolunteerApplied);


//exports
module.exports = router;