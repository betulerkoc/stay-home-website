const { Sequelize, DataTypes } = require('sequelize');
const db = require("../util/database");

const PatientPost = db.define('PatientPost', {
  // Model attributes are defined here
  annotation_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  patient_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  number_of_family: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  number_of_days: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
    type_of_need: {
    type: DataTypes.STRING,
    allowNull: false

  },
   location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  volunteer_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
}, {
    freezeTableName:true
});

module.exports = PatientPost