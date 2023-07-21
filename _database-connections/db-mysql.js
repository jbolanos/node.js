// npm install mysql

const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "sampledb",
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
