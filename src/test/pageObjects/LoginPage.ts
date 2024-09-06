import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  protected url = '/login';

  private locators = {
    username: 'input#username',
    password: 'input#password',
    loginButton: '//button[@type="submit"]',
    alertMessage: 'div[data-alert]',
  };

  async clickOnLoginButton(): Promise<void> {
    await this.page.locator(this.locators.loginButton).click();
  }

  async getAlertMessage(): Promise<string> {
    return this.page.locator(this.locators.alertMessage).innerText();
  }

  async fillInput(field: keyof typeof this.locators, value: string): Promise<void> {
    const locator = this.locators[field];
    await this.page.locator(locator).fill(value);
  }

}
