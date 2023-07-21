// npm install redis

const redis = require("redis");
const client = redis.createClient({
  host: "localhost",
  port: 6379,
});
client.on("connect", () => {
  console.log("Connected to Redis!");
});
client.on("error", (err) => {
  console.log("Error connecting to Redis: ", err);
});
// Set a key-value pair
client.set("key", "value");
// Get the value of a key
const value = client.get("key");
// Delete a key
client.del("key");
// Expire a key after a certain amount of time
client.expire("key", 1000);
// Publish a message to a channel
client.publish("channel", "message");
// Subscribe to a channel
client.subscribe("channel");
// Listen for messages on a channel
client.on("message", (channel, message) => {
  console.log(`Received message on channel ${channel}: ${message}`);
});
