const env = require('../configurations/env');

class HomePage {
    constructor(page) {
        this.page = page;
        this.searchBox = '//input[@placeholder="Search"]';
        this.menu = '//nav';
    }

    async navigate() {
        await this.page.goto(env.baseURL);
    }

    async searchProduct(productName) {
        await this.page.fill(this.searchBox, productName);
        await this.page.keyboard.press('Enter');
    }

    async isMenuVisible() {
        return await this.page.isVisible(this.menu);
    }
}

module.exports = HomePage;