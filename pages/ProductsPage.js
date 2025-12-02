require('dotenv').config();

class ProductsPage {
  constructor(page) {
    this.page = page;

    // Product page locators
    this.addBackpackBtn = "#add-to-cart-sauce-labs-backpack";
    this.cartIcon = '.shopping_cart_link';
    this.title = '.title';

    // Cart item locator
    this.backpackCartItem = '[data-test="inventory-item-name"]';

    // Checkout page locators
    this.checkoutButton = '#checkout';
    this.firstNameField = '#first-name';
    this.lastNameField = '#last-name';
    this.postalCodeField = '#postal-code';
    this.continueButton = '#continue';
    this.finishButton = '#finish';
    this.successHeader = '//h2[@class="complete-header"]';
  }

  //Verifying product page
  async verifyProductsPage() {
    await this.page.waitForSelector(this.title, { timeout: 10000 });
  }

  //Add product to cart
  async addProductToCart() {
    await this.page.click(this.addBackpackBtn);
  }

  //Open cart
  async openCart() {
    await this.page.click(this.cartIcon);
  }

  // Verify the product added in the cart
  getBackpackCartItem() {
    return this.page.locator(this.backpackCartItem);
  }

  //Verify checkout process
  async startCheckout() {
    await this.page.click(this.checkoutButton);
  }

  //Fill in details on checkout page
  async fillCheckoutInfo() {
    await this.page.fill(this.firstNameField, process.env.FIRST_NAME);
    await this.page.fill(this.lastNameField, process.env.LAST_NAME);
    await this.page.fill(this.postalCodeField, process.env.POSTAL_CODE);
    await this.page.click(this.continueButton);
  }

  //Verify the checkout is successfully completed
  async finishCheckout() {
    await this.page.click(this.finishButton);
  }

  //Verify the success message after checkout
  getSuccessMessage() {
    return this.page.locator(this.successHeader);
  }
}

module.exports = { ProductsPage };
