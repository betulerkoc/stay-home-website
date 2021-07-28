const express = require("express");

const router = express.Router();

const usersControllers = require("../controllers/users");

router.get("/", usersControllers.getUsers);

router.post("/sign-up", usersControllers.postSignUp);

router.post("/sign-in", usersControllers.postSignIn);
// router.get("/add-user", usersControllers.getAddUser);

// router.post("/add-user", usersControllers.postAddUser);

module.exports = router;
