let Supermarket = class {
  constructor(name) {
    (this.name = name), (this.clients = []), (this.products = []);
  }
  addProduct(product) {
    this.products.push(product);
  }
  addSubscribe(client) {
    this.clients.push(client);
  }

  sendProducts(client) {
    let result = [];
    this.products.forEach((element) => {
      let flag = true;
      result.forEach((product) => {
        if (element.category.name == product.category.name) {
          flag = false;
        }
      });
      if (flag) {
        result.push(element);
      }
    });
    client.receiveProducts(result, this);
  }

  provideProductsToClients() {
    //enviar productos a cada cliente
    // no es un badsmell que el supermercado le diga al cliente que guarde los prod
    this.clients.forEach((client) => {
      this.sendProducts(client);
    });
  }
};

module.exports = Supermarket;
