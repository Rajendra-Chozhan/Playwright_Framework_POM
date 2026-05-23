const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/Loginpage'); // ✅ FIXED
const env = require('../configurations/env');
const HomePage = require('../pages/HomePage'); 



test('User should login successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);    
 const homePage = new HomePage(page);
 
    await loginPage.navigate(env.baseURL);
    await loginPage.openLoginPopup();
    await loginPage.login(env.email, env.password);
    await homePage.isMenuVisible();
    await homePage.searchProduct('Laptop');

});