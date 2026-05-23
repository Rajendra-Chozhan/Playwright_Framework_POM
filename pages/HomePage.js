const env = require('../configurations/env');

class HomePage {
    constructor(page) {
        this.page = page;
        this.searchBox = '//input[@id="searchBox"][1]';
        this.menu = '//nav';
        this.profile = "//app-fab-login-slot//*[contains(@class,'header-icon-sprite')]";
        this.logout = "//button[normalize-space()='Log Out']";
    }

    async navigate() {
        await this.page.goto(env.baseURL);
    }

    async searchProduct(productName) {
        await this.page.fill(this.searchBox, productName);
        await this.page.keyboard.press('Enter');
         await this.page.waitForTimeout(5000);
    }

    async isMenuVisible() {
        return await this.page.isVisible(this.menu);
    }

     async moveToprofile() {
               return await this.page.locator(this.profile).hover();

    }

     async clickLogOut() {
        return await this.page.locator(this.logout).click();
    }
}


module.exports = HomePage;