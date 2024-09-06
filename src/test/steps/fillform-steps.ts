import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { pageFixture } from "../utiles/pageFixture";
import { FillFormPage } from "../pageObjects/FillFormPage";
import { expect } from "@playwright/test";

let fillFormPage: FillFormPage;

Given("user navigate to form page", async function () {
  fillFormPage = new FillFormPage(pageFixture.page!);
  await fillFormPage.navigateToPage();
});

When("user fill all fields:", async function (dataTable: DataTable) {
  const data = dataTable.rowsHash();
  await fillFormPage.fillInput("firstName", data.firstName);
  await fillFormPage.fillInput("lastName", data.lastName);
  await fillFormPage.fillInput("emailAddress", data.emailAddress);
  (await fillFormPage.getDropdown()).selectOption("Support Inquiry");
  await fillFormPage.fillInput("commentField", data.commentField);
});

When("click on continue button", async function () {
  await fillFormPage.clickOn("continueButton");
});

Then("success message must be displayed on form page", async function () {
  expect(await fillFormPage.getAlertMessage()).toBe(
    "If the information below is correct, press Confirm to complete your form submission. Otherwise, press Modify." ||
      "If the information below is correct, press Confirm to complete your form submission."
  );
});
