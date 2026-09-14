const { chromium } = require('playwright');
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');

let browser;

BeforeAll(async function () {
  console.log('Launch Browser');
  browser = await chromium.launch({ headless: false });
});

AfterAll(async function () {
  console.log('Close Browser');

  if (browser) {
    await browser.close();
  }
});

Before(async function () {
  console.log('Create new context and page');

  global.context = await browser.newContext();
  global.page = await global.context.newPage();
});

After(async function () {
  console.log('Close context and page');

  if (global.page) {
    await global.page.close();
  }

  if (global.context) {
    await global.context.close();
  }
});