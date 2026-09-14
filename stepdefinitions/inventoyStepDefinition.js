const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { pageInventory } = require('../pageobjects/pageInventory');


When('agrega el primer producto disponible al carrito', async () => {
  this.inventoryPage = new pageInventory(global.page);
  await this.inventoryPage.addFirstProductToCart();
});

Then('el contador del carrito debe mostrar {string}', async (expectedCount) => {
  const count = await this.inventoryPage.getCartBadgeCount();
  assert.strictEqual(count, expectedCount);
});