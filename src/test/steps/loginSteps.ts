
import { Given, When, Then } from "@cucumber/cucumber";



import { expect } from "@playwright/test";
import { chromium, Browser, Page } from "@playwright/test";
let browser: Browser;
let page: Page;


Given('Provide valid url', async function () {
  browser = await chromium.launch({ headless: false })
  page = await browser.newPage()
  await page.goto('https://demo.guru99.com/test/newtours/')
});

When('provide valid username and password', async function () {
  await page.locator('[name="userName"]').fill('mercury')
  await page.locator('[name="password"]').fill('mercury')
});

Then('click on login button', async function () {
  await page.locator('[name="submit"]').click()
  await page.waitForTimeout(2000)
  await page.close();
  await browser.close();
});


When('provide valid username as {string} and password as {string}', async function (s: string, s2: string) {
  await page.locator('[name="userName"]').fill(s)
  await page.locator('[name="password"]').fill(s2)
})

When('User enter the username as {string}', async function (string) {
  await page.locator('[name="userName"]').fill(string)

});

When('enetr password as {string}', async function (string) {
  await page.locator('[name="password"]').fill(string)
});

Then('click on submit button', async function () {
  await page.locator('[name="submit"]').click()
});

Then('verify login success message as {string}', async function (string) {
  const msg = await page.locator("//h3[normalize-space()='Login Successfully']").textContent()
  expect(msg).toEqual(string)
   await page.close();
  await browser.close();
});