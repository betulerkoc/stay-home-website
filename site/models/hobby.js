const { Sequelize, DataTypes } = require("sequelize");
const db = require("../util/database");

const Hobby = db.define(
  "hobbies",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgUrl: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Hobby;
