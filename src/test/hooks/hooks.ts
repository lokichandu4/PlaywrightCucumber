
import { BeforeAll, AfterAll,setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers";
import { getENV } from "../helper/env/env";

let page: Page;
let browser: Browser;
setDefaultTimeout(60000);
BeforeAll(async function () {
  getENV()
  browser = await invokeBrowser()
  const context = await browser.newContext();
  page = await context.newPage();
  pageFixture.page = page;
});

AfterAll(async function () {
  try {
    if (pageFixture.page && !pageFixture.page.isClosed()) {
      await pageFixture.page.close();
    }
  } catch (error) {
    console.log('Page already closed:', error);
  }
  
  try {
    if (browser) {
      await browser.close();
    }
  } catch (error) {
    console.log('Browser already closed:', error);
  }
});
