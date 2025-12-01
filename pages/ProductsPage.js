class ProductsPage {
  constructor(page) {
    this.page = page;

    this.addBackpackBtn = '#add-to-cart-sauce-labs-backpack';
    this.cartIcon = '.shopping_cart_link';
    this.cartItemName = '.inventory_item_name';
  }

  async verifyProductsPage() {
    await this.page.waitForSelector('.title');
  }

  async addProductToCart() {
    await this.page.click(this.addBackpackBtn);
  }

  async openCart() {
    await this.page.click(this.cartIcon);
  }
}

module.exports = { ProductsPage };
