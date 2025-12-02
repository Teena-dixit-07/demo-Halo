const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');

test('Login test basic', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);

  await login.goto();
  await login.login();

  await products.verifyProductsPage();
});
