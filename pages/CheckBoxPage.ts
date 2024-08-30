import { BasePage } from "./BasePage";

export class CheckBoxPage extends BasePage {
    protected url: string = '/checkboxes'
    private checkboxLocator = {
        first: ("#checkboxes input[type='checkbox']:nth-of-type(1)"),
        second: ("#checkboxes input[type='checkbox']:nth-of-type(2)")
    };

    async clickOnCheckbox(position: "first" | "second") {
        return await this.page.locator(this.checkboxLocator[position]).click();
    }

    async validateCheckbox(position: "first" | "second") {
        const a = this.page.locator(this.checkboxLocator[position])
        return a.isChecked()
    } 

}