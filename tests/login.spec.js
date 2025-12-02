const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');

test('Login test basic', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);

  //Open the link and enter login credentials 
  await login.goto();
  await login.login();

  //Verify the landing page after login 
  await products.verifyProductsPage();
});
