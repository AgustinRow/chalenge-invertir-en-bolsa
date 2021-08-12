let Category = class {
  constructor(name) {
    this.name = name;
    //(this.products = []);
  }
  addProduct(product) {
    this.products.push(product);
  }
  getProducts() {
    return this.products;
  }
};

module.exports = Category;
