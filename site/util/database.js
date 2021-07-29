// const mysql = require("mysql2");


// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "backend-workshop",
//   password: "Thats-it",
// });

// module.exports = pool.promise();

const { Sequelize } = require('sequelize');

module.exports = new Sequelize('yd-backend-workshop', 'halit', '24118572', {
  host: 'localhost',
  dialect: 'mysql'
});