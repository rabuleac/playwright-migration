import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { PageFactory } from "../pages/PageFactory";
import { BrowserSingleton } from "../utils/BrowserSingleton";
import { PageInstance } from "../utils/PageInstance";


test.describe("Login Page Tests", () => {
  let loginPage: LoginPage;

  test.beforeAll(async () => {
    await PageInstance.init();
    loginPage = PageFactory.createPage(LoginPage);
    await loginPage.navigateToPage();
  });

  test("must login with valid credentials", async () => {
    await loginPage.setUsername("tomsmith");
    await loginPage.setPassword("SuperSecretPassword!");
    await loginPage.clickLoginButton();
    expect (await loginPage.getAlertMessage()).toContain(" You logged into a secure area!")
  });

  test("ensure login fails with invalid username and password", async () => {
    await loginPage.setUsername("invaliduser");
    await loginPage.setPassword("invalidpass");
    await loginPage.clickLoginButton();
    expect (await loginPage.getAlertMessage()).toContain("Your username is invalid!")
  });

  test.afterAll(async () => {
    await BrowserSingleton.closeBrowser();
  });
});
