const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { pageInventory } = require('../pageobjects/pageInventory');
const { pageChek } = require('../pageobjects/pageCheck');

const inventoryPage = new pageInventory();
const checkoutPage = new pageChek();

Given('que el usuario navega al carrito de compras', async () => {
  await inventoryPage.goToCart();
});

When('inicia el proceso de checkout', async () => {
  await checkoutPage.proceedToCheckout();
});

When('completa la información de envío: {string}, {string}, {string}', async (firstName, lastName, postalCode) => {
  await checkoutPage.fillCheckoutInformation(firstName, lastName, postalCode);
});

When('finaliza la compra', async () => {
  await checkoutPage.completeOrder();
});

Then('se confirma la compra con el mensaje {string}', async (expectedMessage) => {
  const message = await checkoutPage.verifyOrderCompletion();
  assert.strictEqual(message, expectedMessage);
});