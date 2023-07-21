const MongoClient = require("mongodb").MongoClient;

const connectionString = "mondoDB://localhost:27017/dbname";

const client = new MongoClient(connectionString);

client.connect(function (err) {
  if (err) throw err;
  console.log("Connected!"); //- DEBUG
  const collection = client.db("dbname").collection("users");

  const query = { name: "John" };

  const cursor = collection.find(query);

  cursor.each((doc) => {
    console.log(doc);
  });
});
