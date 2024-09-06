import { Locator } from "@playwright/test";
import { Page } from "playwright-core";

export abstract class BasePage {
  protected page: Page;
  protected baseUrl = "https://the-internet.herokuapp.com";
  protected abstract url: string;

  constructor(page: Page) {
    this.page = page;
    //console.log('Page was set to' + JSON.stringify(this.page));
  }

  async navigateToPage(): Promise<void> {
    await this.page.goto(this.baseUrl + this.url);
  }

  async fillInput(selector: string, value: string): Promise<void> {
    await this.page.locator(selector).fill(value);
  }

  async clickOn(selector: string): Promise<void> {
    await this.page.locator(selector).click();
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async closePage(): Promise<void> {
    await this.page.close();
  }
}
