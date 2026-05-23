const base = require('@playwright/test');

const LoginPage =
require('../pages/LoginPage');

const HomePage =
require('../pages/HomePage');

exports.test = base.test.extend({

    loginPage: async (
        { page },
        use
    ) => {

        const loginPage =
            new LoginPage(page);

        await use(loginPage);
    },

    homePage: async (
        { page },
        use
    ) => {

        const homePage =
            new HomePage(page);

        await use(homePage);
    }
});

exports.expect = base.expect;