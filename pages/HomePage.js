const env = require('../configurations/env');
const CommonUtils = require('../utils/CommonUtils');

class HomePage {

    constructor(page) {

        this.page = page;

        this.searchBox = page.locator(
            '//input[@id="searchBox"][1]'
        );

        this.menu = page.locator(
            '//nav'
        );

        this.profile = page.locator(
            "//app-fab-login-slot//*[contains(@class,'header-icon-sprite')]"
        );

        this.logout = page.locator(
            "//button[normalize-space()='Log Out']"
        );
    }

    async navigate() {

        await this.page.goto(
            env.baseURL
        );
    }

    async searchProduct(productName) {

        await CommonUtils.fill(
            this.searchBox,
            productName
        );

        await this.page.keyboard.press(
            'Enter'
        );

        await CommonUtils.wait(
            5,
            this.page
        );
    }

    async isMenuVisible() {

        return await this.menu.isVisible();
    }

    async moveToProfile() {

        await CommonUtils.hover(
            this.profile
        );
    }

    async clickLogOut() {

        await CommonUtils.click(
            this.logout
        );
    }
}

module.exports = HomePage;