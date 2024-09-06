import { Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';


export class FillFormPage extends BasePage {
  protected url: string //in acest test nu am nevoie

  private locators = {
    firstName: 'input[placeholder="Your first name"]',
    lastName: 'input[placeholder="Your last name"]',
    emailAddress: 'input[placeholder="Your email address"]',
    selectOption: '//label[contains(text(), "Subject of Your Inquiry")]/following-sibling::select',
    salesInquiry: 'option[value="Sales Inquiry"]',
    supportInquiry: '//select[@id="u_SNv_338367"]/option[contains(text(), "Sales Inquiry")]',
    websiteFeedback: 'select#u_SNv_338367 option[value="Website Feedback"]',
    commentField: 'textarea[placeholder="Your comment"]',
    continueButton: 'input.button-primary.submit',
    infoMessage: 'p',
  };

  async navigateToPage(): Promise<void> {
    await this.page.goto('https://formsmarts.com/form/yx?mode=h5')
  }

  async getDropdown() {
    return this.page.locator(this.locators.selectOption)
  }

  async clickOn(field: keyof typeof this.locators): Promise<void> {
    const locator = this.locators[field];
    await this.page.locator(locator).click();
  }

  async getAlertMessage(): Promise<string> {
    return this.page.locator(this.locators.infoMessage).innerText();
  }

  async fillInput(field: keyof typeof this.locators, value: string): Promise<void> {
    const locator = this.locators[field];
    await this.page.locator(locator).fill(value);
  }

}
