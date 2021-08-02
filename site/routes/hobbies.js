const express = require("express");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

const hobbyControllers = require("../controllers/hobbies");

router.post("/add-hobby", isAuth, hobbyControllers.postAddHobby);
router.get("/get-hobby", isAuth, hobbyControllers.getHobby);

module.exports = router;
