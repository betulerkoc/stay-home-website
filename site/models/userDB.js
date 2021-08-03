const { Sequelize, DataTypes } = require("sequelize");
const db = require("../util/database");
const bcrypt = require("bcrypt");
//Table for sign Up
const User = db.define(
  "User",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //false = volunteer , True = patient
    isPatient: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);


User.beforeCreate((user) => {
  return bcrypt
    .hash(user.password, 10)
    .then((hash) => {
      user.password = hash;
    })
    .catch((err) => {
      throw new Error();
    });
});





module.exports = User;
