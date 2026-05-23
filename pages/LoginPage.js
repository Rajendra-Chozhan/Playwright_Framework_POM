const CommonUtils = require('../utils/temp');

class LoginPage {

    constructor(page) {

        this.page = page;

        this.accountIcon = page.locator(
            "app-fab-login-slot button"
        );

        this.loginButton = page.locator(
            "button.login_password"
        );

        this.emailInput = page.locator(
            "input[type='email']"
        );

        this.passwordInput = page.locator(
            "input[type='password']"
        );

        this.submitBtn = page.locator(
            "#send-otp"
        );
    }

    async navigate(baseURL) {

        await this.page.goto(
            baseURL
        );
    }

    async openLoginPopup() {

        await CommonUtils.click(
            this.accountIcon
        );

        await CommonUtils.click(
            this.loginButton
        );
    }

    async enterEmail(email) {

        await CommonUtils.fill(
            this.emailInput,
            email
        );
    }

    async enterPassword(password) {

        await CommonUtils.fill(
            this.passwordInput,
            password
        );
    }

    async clickLogin() {

        await CommonUtils.click(
            this.submitBtn
        );
    }

    async login(email, password) {

        await this.enterEmail(
            email
        );

        await this.enterPassword(
            password
        );

        await this.clickLogin();
    }
}

module.exports = LoginPage;