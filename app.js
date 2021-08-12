const express = require("express");
const redis = require("redis");

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.PORT || 6379;

const client = redis.createClient(REDIS_PORT);
const app = express();

app.listen(PORT, () => {
  console.log("App listen on", PORT);
});
client.on("connect", function () {
  console.log("Connected!");
});

module.exports = client;