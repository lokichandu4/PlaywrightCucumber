
import { BeforeAll, AfterAll,setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers";
import { getENV } from "../helper/env/env";

let page: Page;
let browser: Browser;
setDefaultTimeout(30000);
BeforeAll(async function () {
  getENV()
  browser = await invokeBrowser()
  page = await browser.newPage();
  pageFixture.page = page;
});

AfterAll(async function () {
  await pageFixture.page!.close();
  await browser.close();
});
