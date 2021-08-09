const { Sequelize } = require('sequelize');

module.exports = new Sequelize('project1', 'betul', '****', {
  host: 'localhost',
  dialect: 'mysql'
});