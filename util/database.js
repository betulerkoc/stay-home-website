const { Sequelize } = require('sequelize');

module.exports = new Sequelize('stayhome', 'betul', '513747399bet', {
  host: 'localhost',
  dialect: 'mysql'
});