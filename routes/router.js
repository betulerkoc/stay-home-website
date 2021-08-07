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
router.post("/getMyPosts", controllerPost.getMyPosts);

//get contact info of user who posted this post
router.get("/contact-info/:ownerID",controllerPost.getContactInfo);

router.post("/volunteer-applied", controllerPost.postVolunteerApplied);

router.put("/patient-post/update", controllerPost.updatePost);

router.delete("/patient-post/del/:id", controllerPost.deleteSpecificPost);


//exports
module.exports = router;