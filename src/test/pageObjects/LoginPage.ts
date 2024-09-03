import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  protected url = '/login';

  private selectors = {
    username: 'input#username',
    password: 'input#password',
    loginButton: '//button[@type="submit"]',
    alertMessage: 'div[data-alert]',
  };

  constructor(page: Page) {
    super(page);
  }

  async clickOnLoginButton(): Promise<void> {
    await this.page.locator(this.selectors.loginButton).click();
  }

  async getAlertMessage(): Promise<string> {
    return this.page.locator(this.selectors.alertMessage).innerText();
  }

  async fillInput(field: 'username' | 'password', value: string): Promise<void> {
    const selector = this.selectors[field];
    await this.page.locator(selector).fill(value);
  }
}
