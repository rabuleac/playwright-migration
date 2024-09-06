import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { pageFixture } from "../utiles/pageFixture";
import { LoginPage } from "./../pageObjects/LoginPage";
import { expect } from "@playwright/test";

let loginPage: LoginPage;

Given("user navigate to login page", async function () {
  loginPage = new LoginPage(pageFixture.page!);
  await loginPage.navigateToPage();
});

When(
  /^providing (valid|invalid) username and password:$/,
  async function (condition: string, dataTable: DataTable) {
    const data = dataTable.rowsHash();
    await loginPage.fillInput("username", data.username);
    await loginPage.fillInput("password", data.password);
  }
);

When("click on login button", async function () {
  await loginPage.clickOnLoginButton();
});

Then("success message must be displayed on login page", async function () {
  expect(await loginPage.getAlertMessage()).toContain(
    "You logged into a secure area!"
  );
});

Then("unsuccess message must be displayed", async function () {
  expect(await loginPage.getAlertMessage()).toContain(
    "Your username is invalid!"
  );
});
