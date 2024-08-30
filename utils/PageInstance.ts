import { Page, BrowserContext } from "playwright-core";
import { BrowserSingleton } from "./BrowserSingleton";

export class PageInstance {
    private static page: Page | null = null;

    private constructor() {}

    public static async init(): Promise<void> {
        if (this.page === null) {
            const browser = await BrowserSingleton.getInstance();
            const context: BrowserContext = await browser.newContext();
            this.page = await context.newPage();
        }
    }

    public static getPage(): Page {
        if (this.page === null) {
            throw new Error("Page instance is not initialized");
        }
        return this.page;
    }
}
