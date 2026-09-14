const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { pageInventory } = require('../pageobjects/pageInventory');
const { pageChek } = require('../pageobjects/pageCheck');


Given('que el usuario navega al carrito de compras', async () => {
  this.inventoryPage = new pageInventory(global.page);
  await this.inventoryPage.goToCart();
});

When('inicia el proceso de checkout', async () => {
  this.checkoutPage = new pageChek(global.page);
  await this.checkoutPage.proceedToCheckout();
});

When('completa la información de envío: {string}, {string}, {string}', async (firstName, lastName, postalCode) => {
  await this.checkoutPage.fillCheckoutInformation(firstName, lastName, postalCode);
});

When('finaliza la compra', async () => {
  await this.checkoutPage.completeOrder();
});

Then('se confirma la compra con el mensaje {string}', async (expectedMessage) => {
  const message = await this.checkoutPage.verifyOrderCompletion();
  assert.strictEqual(message, expectedMessage);
});