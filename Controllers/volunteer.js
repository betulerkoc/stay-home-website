const Volunteer = require("../models/volunteer");
const Patient = require("../models/patient");
const PatientPost = require("../models/patientPost");

exports.postVolunteerSignUp = async (req, res, next) => {
    console.log(req.body);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const volunteer = Volunteer.build({email,password,firstName,lastName})
    try{
      await volunteer.save()
      res.send(volunteer)
    }catch(err){
      res.status(400).send(err)
    }
  };