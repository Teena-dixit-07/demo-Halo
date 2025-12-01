This project contains a small set of automated tests written using Playwright.
The tests are created for the website https://www.saucedemo.com/
Focus on basic actions such as logging in and adding an item to the cart.
What this project does

The automation includes:
Login Test-
Opens the SauceDemo website
Enters username and password
Logs into the application
Confirms that the Products page is visible

Add to Cart Test-
Logs into the website
Clicks the “Add to cart” button for the backpack item
Opens the cart
Confirms that the item appears inside the cart

These tests show how to perform simple user actions like clicking, typing, and checking page content.

Files this project contains- 
pages/ → Contains reusable page objects
tests/ → Contains the actual test scripts
playwright.config.js → Basic Playwright configuration

Steps to Run the tests-
1. npm install
2. npx playwright test login.spec.js --headed (The browser will open so you can watch the test steps happening.)
3. npx playwright test login.spec.js --headed --debug (to run in debug mode)

Tools Used
1. Playwright (JavaScript)
2. Node.js

The SauceDemo test credentials used are:
Username: standard_user
Password: secret_sauce
