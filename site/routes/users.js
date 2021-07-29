const express = require("express");

const router = express.Router();

const usersControllers = require("../controllers/users");

router.get("/", usersControllers.getUsers);

router.post("/sign-up", usersControllers.postSignUp);

router.post("/sign-in", usersControllers.postSignIn);

module.exports = router;
