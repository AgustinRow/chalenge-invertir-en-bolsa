let Product = class {
  constructor(name, buyPrice, sellPublicPrice, sellPrice, id) {
    (this.name = name),
      (this.buyPrice = buyPrice),
      (this.sellPublicPrice = sellPublicPrice),
      (this.sellPrice = sellPrice),
      (this.id = id);
    this.category = null;
  }
  attachToCategory(category) {
    //category.addProduct(this);
    this.category = category;
  }
};

module.exports = Product;
