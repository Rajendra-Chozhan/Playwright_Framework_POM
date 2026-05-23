class CommonUtils {

    static async click(locator) {

        await locator.waitFor({
            state: 'visible'
        });

        await locator.click();
    }

    static async fill(locator, value) {

        await locator.waitFor({
            state: 'visible'
        });

        await locator.fill(value);
    }

    static async wait(seconds, page) {

        await page.waitForTimeout(
            seconds * 1000
        );
    }

    static async takeScreenshot(page, fileName) {

        await page.screenshot({
            path: `screenshots/${fileName}.png`,
            fullPage: true
        });
    }

    static async scrollIntoView(locator) {

        await locator.scrollIntoViewIfNeeded();
    }

    static async scrollToBottom(page) {

        await page.evaluate(() => {
            window.scrollTo(
                0,
                document.body.scrollHeight
            );
        });
    }
}

module.exports = CommonUtils;