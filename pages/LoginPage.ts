import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  protected url = "/login";
  private selectors = {
    username: "input#username",
    password: "input#password",
    loginButtonSelector: '//button[@type="submit"]',
    alertMessage: "div[data-alert]",
  };

  async clickOnLoginButton() {
    await this.page.locator(this.selectors.loginButtonSelector).click();
  }

  async getAlertMessage(): Promise<string> {
    return this.page.locator(this.selectors.alertMessage).innerText();
  }

  async fillInput(field: "username" | "password", value: string) {
    const selector = this.selectors[field];
    await this.page.locator(selector).fill(value);
  }
}
