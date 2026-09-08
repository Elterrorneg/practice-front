const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { pageInventory } = require('../pageobjects/pageInventory');

const inventoryPage = new pageInventory();

When('agrega el primer producto disponible al carrito', async () => {
  await inventoryPage.addFirstProductToCart();
});

Then('el contador del carrito debe mostrar {string}', async (expectedCount) => {
  const count = await inventoryPage.getCartBadgeCount();
  assert.strictEqual(count, expectedCount);
});