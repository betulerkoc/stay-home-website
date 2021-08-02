const { Sequelize, DataTypes } = require('sequelize');
const db = require("../util/database");
const bcrypt = require("bcrypt")

const Patient = db.define('Patient', {
  // Model attributes are defined here
  annotation_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  },
  }, {
    freezeTableName:true
});
Patient.beforeCreate((patient) => {
  return bcrypt.hash(patient.password,10).then(hash => {
    patient.password = hash
  }).catch(err => {
    throw new Error()
  })
  })
module.exports = Patient