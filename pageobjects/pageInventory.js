class pageInventory {
  constructor(page) {
    this.page = page;
    this.inventoryItems = page.locator('[data-test="inventory-item"]');    
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
    this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
  }
  async addFirstProductToCart() {
    await this.addToCartButton.first().click();
  }

  async getCartBadgeCount() {
    return await this.shoppingCartBadge.innerText();
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }
}

module.exports = { pageInventory };