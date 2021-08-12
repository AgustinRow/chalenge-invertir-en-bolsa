const redis = require("redis");
const client = redis.createClient();
client.on("connect", function () {});

const Client = require("./client");
const Supermarket = require("./supermarket");
const Category = require("./category");
const Product = require("./product");
const crypto = require("crypto");

//--------Initialize products----------//
let id = crypto.randomBytes(16).toString("hex");
let pan = new Product("pan", 100, 150, 110, id);

id = crypto.randomBytes(16).toString("hex");
let medialunas = new Product("medialunas", 100, 150, 110, id);

id = crypto.randomBytes(16).toString("hex");
let tortas = new Product("tortas", 100, 150, 110, id);

id = crypto.randomBytes(16).toString("hex");
let birra = new Product("birra", 100, 150, 110, id);

id = crypto.randomBytes(16).toString("hex");
let papel = new Product("papel", 100, 150, 110, id);

id = crypto.randomBytes(16).toString("hex");
let cubierta = new Product("cubierta", 100, 150, 110, id);

id = crypto.randomBytes(16).toString("hex");
let cortina = new Product("cortina", 100, 150, 110, id);

//------------ Attach products with category-----------------//
let panaderia = new Category("panaderia");
let baño = new Category("baño");
let casa = new Category("casa");
let auto = new Category("auto");
let bebida = new Category("bebida");

pan.attachToCategory(panaderia);
//panaderia.addProduct(pan);

medialunas.attachToCategory(panaderia);
//panaderia.addProduct(medialunas);

tortas.attachToCategory(panaderia);
//panaderia.addProduct(tortas);

birra.attachToCategory(bebida);
//bebida.addProduct(birra);

papel.attachToCategory(baño);
//baño.addProduct(papel);

cubierta.attachToCategory(auto);
//auto.addProduct(cubierta);

cortina.attachToCategory(casa);
//casa.addProduct(cortina);

//--------Create and Add products to supermarket----------//
const chino = new Supermarket("Chino");
const carrefour = new Supermarket("Carrefour");
chino.addProduct(cortina);
chino.addProduct(cubierta);
chino.addProduct(pan);
chino.addProduct(papel);
chino.addProduct(medialunas);
chino.addProduct(birra);

carrefour.addProduct(pan);
carrefour.addProduct(papel);
carrefour.addProduct(medialunas);
carrefour.addProduct(birra);

//------Crete Supermarket and Suscribe Client to supermarket------//
const client1 = new Client("client1");
const client2 = new Client("client2");

client1.subscribe(chino);
chino.addSubscribe(client1);
client2.subscribe(chino);
chino.addSubscribe(client2);

//-------Provide Products to clients----------//
chino.provideProductsToClients();
carrefour.provideProductsToClients();

//---------Printing results-----------//
console.log("List of products that each client has received");

client.get(client1.name, (err, object) => {
  console.log("Client:", client1.name);
  console.log(object);
});

client.get(client2.name, (err, object) => {
  console.log("Client:", client1.name);
  console.log(object);
});
