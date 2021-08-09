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
router.post("/patient-post", controllerPost.addPost);
router.get("/patient-post", controllerPost.getPosts);
router.post("/getMyPosts", controllerPost.getMyPosts);
router.get("/contact-info/:ownerID",controllerPost.getContactInfo);
router.post("/volunteer-applied", controllerPost.postVolunteerApplied);
router.put("/patient-post/update", controllerPost.updatePost);
router.delete("/patient-post/del/:id", controllerPost.deleteSpecificPost);

module.exports = router;