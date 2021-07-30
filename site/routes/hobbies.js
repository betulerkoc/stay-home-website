const express = require("express");

const router = express.Router();

const hobbyControllers = require("../controllers/hobbies");

router.post("/add-hobby", hobbyControllers.postAddHobby);
router.get("/get-hobby", hobbyControllers.getHobby);

module.exports = router;
