const { test, expect } = require('../fixtures/baseTest');
const env = require('../configurations/env');

test('User should search product successfully', async ({ loginPage, homePage }) => {

    await loginPage.navigate(env.baseURL);
    await loginPage.openLoginPopup();
    await loginPage.login(env.email, env.password);
    await expect(homePage.menu).toBeVisible();
    await homePage.searchProduct('Laptop');
});