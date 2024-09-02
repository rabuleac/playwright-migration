import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Page Tests", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToPage();
  });

  test("must login with valid credentials", async () => {
    await loginPage.fillInput("username", "tomsmith")
    await loginPage.fillInput("password", "SuperSecretPassword!")
    await loginPage.clickOnLoginButton()
    expect(await loginPage.getAlertMessage()).toContain("You logged into a secure area!");
  });

  test("ensure login fails with invalid username and password", async () => {
    await loginPage.fillInput("username", "invaliduser");
    await loginPage.fillInput("password", "invalidpass");
    await loginPage.clickOnLoginButton();
    expect(await loginPage.getAlertMessage()).toContain("Your username is invalid!");
    await loginPage.closePage()
  });
});
