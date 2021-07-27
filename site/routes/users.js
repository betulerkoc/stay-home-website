const express = require("express");

const router = express.Router();

const usersControllers = require("../controllers/users");

router.get("/", usersControllers.getUsers);

router.get("/add-user", usersControllers.getAddUser);

router.post("/add-user", usersControllers.postAddUser);

module.exports = router;
