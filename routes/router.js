const express = require("express");

const router = express.Router();

const controllerPatient = require("../Controllers/patient");
const controllerVolunteer = require("../Controllers/volunteer");

router.get("/", controllerPatient.defaultRouter);

router.post("/patient-sign-up", controllerPatient.postPatientSignUp);

router.post("/volunteer-sign-up", controllerVolunteer.postVolunteerSignUp);

//exports
module.exports = router;