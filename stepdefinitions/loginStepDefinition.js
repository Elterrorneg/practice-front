const { Given, When, Then } = require('@cucumber/cucumber');
const { PageLogin } = require('../pageobjects/pageLogin');


Given('que el Cliente se encuentra en la página SauceDemo', async () => {
  this.pageLogin = new PageLogin(global.page);
  await this.pageLogin.navigateLoginScreen();
});

When('inicia sesion con las credenciales: {string}, {string}', async (username, password) => {
  await this.pageLogin.submitLogin(username, password);
});

Then('el login es satisfactorio', async () => {
  await this.pageLogin.verifySuccessfulLogin();
});

Then('el login no es satisfactorio', async () => {
  await this.pageLogin.verifyFailedLogin();
});
