class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = '#user-name';
    this.passwordField = '#password';
    this.loginButton = '#login-button';
    this.title = '//*[@id="header_container"]/div[2]/span'

  }
// This will hit the URL 
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }
// This will fill in the login credentials and login 
  async login() {
    await this.page.fill(this.usernameField, "standard_user");
    await this.page.fill(this.passwordField, "secret_sauce");
    await this.page.click(this.loginButton);
    await this.page.locator(this.title);
  }
}

module.exports = { LoginPage };
