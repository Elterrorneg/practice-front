class pageChek {
  constructor() {
    this.checkoutButton = '[data-test="checkout"]';
    this.firstNameInput = '[data-test="firstName"]';
    this.lastNameInput = '[data-test="lastName"]';
    this.postalCodeInput = '[data-test="postalCode"]';
    this.continueButton = '[data-test="continue"]';
    this.finishButton = '[data-test="finish"]';
    this.completeHeader = '.complete-header';
  }

  get page() {
    return global.page;
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }

  async fillCheckoutInformation(firstName, lastName, postalCode) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
    await this.page.click(this.continueButton);
  }

  async completeOrder() {
    await this.page.click(this.finishButton);
  }

  async verifyOrderCompletion() {
    await this.page.waitForSelector(this.completeHeader);
    const headerText = await this.page.locator(this.completeHeader).innerText();
    return headerText;
  }
}

module.exports = { pageChek };