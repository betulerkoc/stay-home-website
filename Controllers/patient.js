const Patient = require("../models/patient");
const Volunteer = require("../models/volunteer");
const PatientPost = require("../models/patientPost");

exports.defaultRouter =  (req, res, next) => {
  res.status(200)
  .json({
    status: 'success',
    message: "Welcome to Saty Home Api"
  }); 
 };

  exports.postPatientSignUp = async (req, res, next) => {
    console.log(req.body);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const patient = Patient.build({email,password,firstName,lastName})
    try{
        await patient.save()
        res.send(patient)
    }catch(err){
      res.status(400).send(err)
    }
  };