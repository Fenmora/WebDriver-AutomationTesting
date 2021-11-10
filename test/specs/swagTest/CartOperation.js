/********************************************************************
* Test #2
* @author       Fender Mora
* @description  Login to the https://www.saucedemo.com/
* @date         07-11-2021 14:02
*********************************************************************/

const login = require('../../pageobjects/login.page');
const inventory = require('../../pageobjects/inventory.page');
const CartPage = require('../../pageobjects/cart.page');

describe("Swag Labs -> Cart Operation", () => {

    it('Load conection to Cart Operation Page', async () => {

        //Loading Login page
        login.open();

        //Login to Swag Labs
        await login.login('standard_user', 'secret_sauce');
        await browser.pause(500);

        //adding products to my cart
        await inventory.AddingProductsbyId(0);
        await inventory.AddingProductsbyId(3);

        //Opening Cart
        inventory.openCart();

    });

    //Checkout products in my cart
    it('Checkout products in my cart', async () => {
        await browser.pause(3000);
        //counting element in my cart y evaluate the expected value
        expect(await CartPage.getItemInCart()).toEqual(
            2,
            'Amount of items was not equal to 2',
        );

        await browser.pause(1000);

        //click checkout
        CartPage.goToCheckout();
        await browser.pause(3000);
    });

});
