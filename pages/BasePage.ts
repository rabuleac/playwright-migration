import { Page } from "playwright-core";
import { PageInstance } from "../utils/PageInstance.ts";

export abstract class BasePage {
    protected page: Page;
    protected baseUrl = "http://the-internet.herokuapp.com";
    protected abstract url: string;

    constructor() {
        this.page = PageInstance.getPage();
    }

    async navigateToPage(): Promise<void> {
        await this.page.goto(`${this.baseUrl}${this.url}`);
    }

    getPageTitle() {}
}
