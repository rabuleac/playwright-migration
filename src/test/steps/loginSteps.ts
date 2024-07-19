import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page, Browser, BrowserContext } from '@playwright/test'
import { pageFixture } from '../utiles/pageFixture';
import LoginPage from '../pageObjects/LoginPage';

let browser:Browser;
let context:BrowserContext;
//let page:Page;

const loginPage = new LoginPage()

Given('providing valid url for login',async function () {
    await pageFixture.page.goto("https://demo.guru99.com/test/newtours/")
    await pageFixture.logger.info("Opening Browser "+"https://demo.guru99.com/test/newtours/")
  });

  When('providing valid username and password',async function () {
    await loginPage.enterUserNameAndPassword("mercury", "mercury")
  });

  Then('clicking login button',async function () {
    await loginPage.submit()
  });

  When('providing valid username as {string} and password as {string}',async function (name, password) {
    await loginPage.enterUserNameAndPassword(name, password)
  });