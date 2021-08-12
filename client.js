const redis = require("redis");
const client = redis.createClient();
client.on("connect", function () {});

let Client = class {
  constructor(name) {
    (this.name = name), (this.supermarkets = []);
  }

  subscribe(supermarket) {
    this.supermarkets.push(supermarket);
  }

  receiveProducts(products) {
    this.storeProducts(products);
  }

  storeProducts(products, supermarket) {
    client.append(this.name, JSON.stringify(products));
  }
};

module.exports = Client;
