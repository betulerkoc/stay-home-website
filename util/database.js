const { Sequelize } = require('sequelize');

module.exports = new Sequelize('stayhome', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});