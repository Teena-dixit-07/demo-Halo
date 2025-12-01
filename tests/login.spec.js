const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');

test('Login and verify products page', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await products.verifyProductsPage();

  const title = await page.textContent('.title');
  expect(title).toBe('Products');
});

test('Add item to cart and verify cart', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await products.addProductToCart();
  await products.openCart();
  await page.waitForTimeout(2000);
  

  const cartItem = await page.textContent('.inventory_item_name');
  expect(cartItem).toContain('Sauce Labs Backpack');
  await page.waitForTimeout(2000);
});
