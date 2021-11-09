/********************************************************************
* Test #1
* @author       Fender Mora
* @description  Login to the https://www.saucedemo.com/
* @date         05-11-2021 14:02
*********************************************************************/

const login = require('../../pageobjects/login.page');

describe(" Swag Labs -> Login Operation", () => {

    /**
     * Load Swag Labs Login
     */

    it('Load url to be able', async () => {
        await login.open();
        await login.waitForIsShown();
        await expect(browser).toHaveTitle("Swag Labs");
    });

    /********
     * Verify that the input are empty
     */
    it("Verify that the input contains their respective values", async () => {
        await expect(login.inputUsername).toHaveText('');
        await expect(login.inputPassword).toHaveText('')
        await browser.pause(500);
    });

    /**
     * Verify user was logged in successfully
     */
    it("should login with valid credentials", async () => {
        await login.login('standard_user', 'secret_sauce');
        await browser.pause(500);

        expect(browser).toHaveUrl('/inventory.html');

    });
});
