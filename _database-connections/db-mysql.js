const dotenv = require("dotenv");
const mysql = require("mysql");

dotenv.config();
// Get the mySQL database connection value from the .env file
const DB_HOST = process.env.MYDB_HOST;
const DB_PORT = process.env.MYDB_PORT;
const DB_USER = process.env.MYDB_USER;
const DB_PASS = process.env.MYDB_PASS;
const DB_DB = process.env.MYDB_DB;

const con = mysql.createConnection({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASS,
  database: DB_DB,
});

const sql = "SELECT * FROM users";

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!"); //- DEBUG
  con.query(sql, function (err, result) {
    if (err) throw err;
    result.map((row) => {
      console.log(row["name"]);
    });
  });
});
