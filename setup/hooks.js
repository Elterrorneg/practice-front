const { chromium } = require('playwright');
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');

BeforeAll(async () => {
  console.log('Launch Browser');
  global.browser = await chromium.launch({ headless: false });
});

AfterAll(async () => {
  console.log('Close Browser');
  if (global.browser) {
    await global.browser.close();
  }
});

Before(async () => {
  console.log('Create new context and page');
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

After(async () => {
  console.log('Close context and page');
  if (global.page) {
    await global.page.close();
  }
  if (global.context) {
    await global.context.close();
  }
});