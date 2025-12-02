const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
require('dotenv').config();

/**
 * This test flow is going to do login, then add a product in the cart, 
 * verify the checkout flow and after successful checkout verify the success message
 */
test('Full checkout flow', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);

  // Login
  await login.goto();
  await login.login();

  // Add Product to cart and open cart 
  await products.verifyProductsPage();
  await products.addProductToCart();
  await products.openCart();

  // Verify product in cart 
  await expect(products.getBackpackCartItem()).toBeVisible();

  // Checkout flow
  await products.startCheckout();
  await products.fillCheckoutInfo();
  await products.finishCheckout();

  // Confirm success
  await products.getSuccessMessage();
});
