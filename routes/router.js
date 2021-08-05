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

//getPosts

//exports
module.exports = router;