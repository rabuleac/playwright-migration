import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from '../utiles/pageFixture';
import { LoginPage } from './../pageObjects/LoginPage';
import { expect } from '@playwright/test';

let loginPage: LoginPage;

Given("user navigate to page", async function () {
    loginPage = new LoginPage(pageFixture.page!);
    await loginPage.navigateToPage();
});

When('providing valid username and password', async function () {
    await loginPage.fillInput("username", "tomsmith");
    await loginPage.fillInput("password", "SuperSecretPassword!");
});

When('providing invalid username and password', async function () {
    await loginPage.fillInput("username", "halo");
    await loginPage.fillInput("password", "haloo");
});

When('click on login button', async function () {
    await loginPage.clickOnLoginButton();
});

Then('success message must be displayed', async function () {
    expect (await loginPage.getAlertMessage()).toContain("You logged into a secure area!")
});

Then('unsuccess message must be displayed', async function () {
    expect (await loginPage.getAlertMessage()).toContain("Your username is invalid!")
});
