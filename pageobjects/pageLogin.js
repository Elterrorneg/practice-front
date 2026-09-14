class PageLogin {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('[data-test="error"]');
    this.inventoryList = page.locator('.inventory_list');
  }

  async navigateLoginScreen() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async submitLogin(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifySuccessfulLogin() {
    await this.page.waitForURL('**/inventory.html');
    await this.inventoryList.waitFor();
  }

  async verifyFailedLogin() {
    await this.errorMessage.waitFor();
    console.log(`Error visible: ${await this.errorMessage.innerText()}`);
  }
}

module.exports = { PageLogin };