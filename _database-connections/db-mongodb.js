// npm install mongodb
const MongoClient = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017/");

client.connect((err) => {
  if (err) {
    console.log(err);
    ProcessingInstruction.exit(1);
  }
  console.log("Connected successfully to MongoDB!");
});

const collection = client.db("mydb").collection("mycollection");

const document = {
  name: "John",
  age: 37,
};
collection.insertOne(document, (err, result) => {
  if (err) {
    console.log(err);
    ProcessingInstruction.exit(1);
  }
  console.log(result);
});

const cursor = collection.find();
cursor.each((document) => {
  console.log(document);
});

client.close();
