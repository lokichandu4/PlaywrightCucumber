
import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from  "../hooks/pageFixture";


import { expect } from "@playwright/test";
import { chromium, Browser, Page } from "@playwright/test";
import LoginPage from "../pageObjects/LoginPage";
//let browser: Browser;
//let page: Page;

const loginPage = new LoginPage();

Given('Provide valid url', async function () {
  //browser = await chromium.launch({ headless: false })
  //page = await browser.newPage()
  await pageFixture.page?.goto('https://demo.guru99.com/test/newtours/')
});

When('provide valid username and password', async function () {
  await pageFixture.page?.locator('[name="userName"]').fill('mercury')
  await pageFixture.page?.locator('[name="password"]').fill('mercury')
});

Then('click on login button', async function () {
  await pageFixture.page?.locator('[name="submit"]').click()
  await pageFixture.page?.waitForTimeout(2000)
  //await pageFixture.page?.close();
  //await browser.close();
});


When('provide valid username as {string} and password as {string}', async function (s: string, s2: string) {
  await pageFixture.page?.locator('[name="userName"]').fill(s)
  await pageFixture.page?.locator('[name="password"]').fill(s2)
})

When('User enter the username as {string}', async function (string) {
  await pageFixture.page?.locator('[name="userName"]').fill(string)

});

When('enetr password as {string}', async function (string) {
  await pageFixture.page?.locator('[name="password"]').fill(string)
});

Then('click on submit button', async function () {
  await pageFixture.page?.locator('[name="submit"]').click()
});

Then('verify login success message as {string}', async function (string) {
  const msg = await pageFixture.page?.locator("//h3[normalize-space()='Login Successfully']").textContent()
  await expect(msg).toEqual(string)
   //await pageFixture.page?.close();
  //await browser.close();
});

When('User enter the username {string}', ç(username: string) {
  await loginPage.enterUserName(username)
})

When('User enetr ther password as {string}', async function(password: string) {
  await loginPage.enterPasswrod(password)
})

Then('User clicks on login button',async function () {
  await loginPage.clickSubmit()
})
