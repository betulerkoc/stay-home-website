const express = require("express");
const passport = require("passport");

const router = express.Router();

const usersControllers = require("../controllers/users");

router.get("/", usersControllers.getUsers);

router.post("/sign-up", usersControllers.postSignUp);

router.post("/sign-in", passport.authenticate('local',{session:false, failureRedirect:"/sign-up"}),(req,res) => {
    res.send(req.user)
});

module.exports = router;
