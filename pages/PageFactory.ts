import { BasePage } from "./BasePage";

export class PageFactory {
    public static createPage<T extends BasePage>(pageClass: new () => T): T {
        return new pageClass();
    }
}
