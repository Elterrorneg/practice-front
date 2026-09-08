class LoginPage {
  constructor() {
    this.url = 'https://www.saucedemo.com';
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '[data-test="error"]';
    this.inventoryList = '.inventory_list';
  }

  get page() {
    return global.page;
  }

  async navigateLoginScreen() {
    await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
    await this.page.waitForLoadState('networkidle');
  }

  async submitLogin(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async verifySuccessfulLogin() {
    await this.page.waitForURL('**/inventory.html');
    await this.page.waitForSelector(this.inventoryList);
  }

  async verifyFailedLogin() {
    await this.page.waitForSelector(this.errorMessage);
    const text = await this.page.locator(this.errorMessage).innerText();
    console.log(`Error visible: ${text}`);
  }
}

module.exports = { LoginPage, PageLogin: LoginPage };