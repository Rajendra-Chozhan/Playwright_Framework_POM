class LoginPage {
    constructor(page) {
        this.page = page;

        // 🔍 Locators (update if UI differs)
        this.accountIcon = '//*[contains(@class,"account")]';
        this.loginButton = '//button[contains(text(),"Login")]';
        this.emailInput = '//input[@type="email"]';
        this.passwordInput = '//input[@type="password"]';
        this.submitBtn = '//button[normalize-space()="Login"]';
    }

    async navigate(baseURL) {
        await this.page.goto(baseURL);
    }

    async openLoginPopup() {
        await this.page.click(this.accountIcon);
        await this.page.click(this.loginButton);
    }

    async enterEmail(email) {
        await this.page.fill(this.emailInput, email);
    }

    async enterPassword(password) {
        await this.page.fill(this.passwordInput, password);
    }

    async clickLogin() {
        await this.page.click(this.submitBtn);
    }

    async login(email, password) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}

module.exports = LoginPage;