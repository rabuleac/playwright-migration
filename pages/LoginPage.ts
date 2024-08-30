import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    protected url = '/login';
    private usernameSelector = ('input#username')
    private passwordSelector = ('input#password')
    private loginButtonSelector = ('//button[@type="submit"]')
    private allertMessage = ('div[data-alert]')

    async setUsername(username: string) {
        return await this.page.locator(this.usernameSelector).fill(username)
    }

    async setPassword(password: string) {
        return await this.page.locator(this.passwordSelector).fill(password)
    }

    async clickLoginButton() {
        return await this.page.locator(this.loginButtonSelector).click();
    }

    async submitLoginForm(username: string, password: string) {
        await this.setUsername(username)
        await this.setPassword(password)
        await this.clickLoginButton()
    }

    async getAlertMessage(): Promise<string> {
         return this.page.locator(this.allertMessage).innerText()
    }

}