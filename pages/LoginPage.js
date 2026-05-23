class LoginPage {

    constructor(page) {

        this.page = page;

        // Locators
 this.accountIcon = page.locator("app-fab-login-slot button");

this.loginButton = page.locator(
    "button.login_password"
);

this.emailInput = page.locator(
    "input[type='email']"
);

this.passwordInput = page.locator(
    "input[type='password']"
);

this.submitBtn = page.locator("#send-otp");
    }

    async navigate(baseURL) {
        await this.page.goto(baseURL);
    }

    async openLoginPopup() {

        await this.accountIcon.click();

        await this.loginButton.click();
    }

    async enterEmail(email) {

        await this.emailInput.fill(email);
    }

    async enterPassword(password) {

        await this.passwordInput.fill(password);
    }

    async clickLogin() {

        await this.submitBtn.click();
    }

    async login(email, password) {

        await this.enterEmail(email);

        await this.enterPassword(password);

        await this.clickLogin();
    }
}

module.exports = LoginPage;