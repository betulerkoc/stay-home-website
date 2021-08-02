//volunter model
const { Sequelize, DataTypes } = require('sequelize');
const db = require("../util/database");
const bcrypt = require("bcrypt")

const Volunteer = db.define('Volunteer', {
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
Volunteer.beforeCreate((volunteer) => {
    return bcrypt.hash(volunteer.password,10).then(hash => {
        volunteer.password = hash
    }).catch(err => {
      throw new Error()
    })
    })
module.exports = Volunteer