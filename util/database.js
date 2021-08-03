const { Sequelize } = require('sequelize');

module.exports = new Sequelize('stayHome', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});