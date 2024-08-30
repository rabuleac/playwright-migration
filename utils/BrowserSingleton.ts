import { Browser, chromium } from "playwright-core";

export class BrowserSingleton {
    private static browser: Browser | null = null;

    private constructor() {}

    public static async getInstance(): Promise<Browser> {
        if (this.browser === null) {
            this.browser = await chromium.launch({ headless: true });
        }
        return this.browser;
    }

    public static async closeBrowser(): Promise<void> {
        if (this.browser !== null) {
            await this.browser.close();
            this.browser = null;
        }
    }
}
