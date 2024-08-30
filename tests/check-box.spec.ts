import { test, expect } from "@playwright/test";
import { PageInstance } from "../utils/PageInstance";
import { PageFactory } from "../pages/PageFactory";
import { BrowserSingleton } from "../utils/BrowserSingleton";
import { CheckBoxPage } from "../pages/CheckBoxPage";

test.describe("Validate checkbox page", () => {
  let checkBoxPage: CheckBoxPage;

  test.beforeAll(async () => {
    await PageInstance.init();
    checkBoxPage = PageFactory.createPage(CheckBoxPage);
    await checkBoxPage.navigateToPage();
  });

  test("validate second checkbox selected by default, first unselected", async () => {
    expect(await checkBoxPage.validateCheckbox("second")).toBeTruthy;
    expect(await checkBoxPage.validateCheckbox("first")).toBeFalsy;
  });

  test("validate first checkbox selected, second unselected", async () => {
    await checkBoxPage.clickOnCheckbox("first")
    await checkBoxPage.clickOnCheckbox("second")
    expect(await checkBoxPage.validateCheckbox("first")).toBeTruthy;
    expect(await checkBoxPage.validateCheckbox("second")).toBeFalsy;
  });

  test.afterAll(async () => {
    await BrowserSingleton.closeBrowser();
  });
});
