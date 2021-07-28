const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "backend-workshop",
  password: "Thats-it",
});

module.exports = pool.promise();
