class pageInventory {
  constructor() {
    this.inventoryItems = '.inventory_item';
    this.addToCartButton = '[data-test^="add-to-cart"]';
    this.shoppingCartBadge = '.shopping_cart_badge';
    this.shoppingCartLink = '.shopping_cart_link';
  }

  get page() {
    return global.page;
  }

  async addFirstProductToCart() {
    await this.page.locator(this.addToCartButton).first().click();
  }

  async getCartBadgeCount() {
    return await this.page.locator(this.shoppingCartBadge).innerText();
  }

  async goToCart() {
    await this.page.click(this.shoppingCartLink);
  }
}

module.exports = { pageInventory };