const { Given, When, Then } = require('@cucumber/cucumber');
const { PageLogin } = require('../pageobjects/pageLogin');

const loginPage = new PageLogin();

Given('que el Cliente se encuentra en la página SauceDemo', async () => {
  await loginPage.navigateLoginScreen();
});

When('inicia sesion con las credenciales: {string}, {string}', async (username, password) => {
  await loginPage.submitLogin(username, password);
});

Then('el login es satisfactorio', async () => {
  await loginPage.verifySuccessfulLogin();
});

Then('el login no es satisfactorio', async () => {
  await loginPage.verifyFailedLogin();
});
