Playwright Automation Framework – SauceDemo (JavaScript)
1. Introduction: This document describes a basic Playwright automation framework created for the website SauceDemo.
The project demonstrates essential automated actions such as login, adding an item to the cart, and completing checkout.
2. Objectives
- Demonstrate UI automation using Playwright
- Use Page Object Model (POM)
- Automate full checkout flow
- Use .env for test data
- Generate screenshots and videos on failure
- Run tests in CI/CD (GitHub Actions)
3. Tools & Technologies
- Playwright (JavaScript)
- Node.js
- Dotenv
- GitHub Actions
4. Project Structure
demo-halo/
pages/
LoginPage.js
ProductsPage.js
tests/
login.spec.js
checkout.spec.js
.env
playwright.config.js
package.json
README.md
5. Test Scenarios Covered
- Login Test
- Add to Cart Test
- Checkout Flow
6. Environment Variables (.env)
USERNAME=standard_user
PASSWORD=secret_sauce
FIRST_NAME=Teena
LAST_NAME=Dixit
POSTAL_CODE=110001
7. How to Run the Project
npm install
npx playwright install
npx playwright test --headed
8. Debugging Features
- Screenshots on failure
- Video recording
- Trace viewer
9. CI/CD – GitHub Actions
Automated workflow to install dependencies, run tests, and upload reports.
10. Summary
This automation project demonstrates a simple, modular Playwright setup using POM,
environment variables, debugging tools, and CI/CD integration.