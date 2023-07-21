// npm install pg

const pg = require("pg");
const connectionString = "postgres://postgres:postgres@localhost:5432/mydb";
const client = new pg.Client(connectionString);
client.connect();

// query the database
const result = client.query("SELECT * FROM users");
console.log(result.rows);

client.end();
