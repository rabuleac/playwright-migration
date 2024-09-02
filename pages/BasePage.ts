import { Page } from "playwright-core";

export abstract class BasePage {
  protected page: Page;
  protected abstract url: string;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToPage(): Promise<void> {
    await this.page.goto(`${this.url}`);
  }

  async fillInput(selector: string, value: string) {
    await this.page.locator(selector).fill(value);
  }

  async clickOn(selector: string) {
    await this.page.locator(selector).click();
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async closePage(){
    await this.page.close()
  }
}
