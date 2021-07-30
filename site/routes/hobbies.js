const express = require("express");

const router = express.Router();

const hobbyControllers = require("../controllers/hobbies");

router.post("/add-hobby", hobbyControllers.postAddHobby);

module.exports = router;
