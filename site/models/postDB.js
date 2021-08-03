const { Sequelize, DataTypes } = require("sequelize");
const db = require("../util/database");

//Table for Post
const User = db.define(
  "Post",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    
   familyNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dayNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    foodItem: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
    //false = not applied | True = Applied
    isApplied: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Post;
