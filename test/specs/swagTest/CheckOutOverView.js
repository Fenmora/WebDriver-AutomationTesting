/********************************************************************
* Test #2
* @author       Fender Mora
* @description  Login to the https://www.saucedemo.com/
* @date         08-11-2021 14:02
*********************************************************************/

const login = require('../../pageobjects/login.page');
const inventory = require('../../pageobjects/inventory.page');
const CartPage = require('../../pageobjects/cart.page');
const CheckOutOverView = require('../../pageobjects/checkOutOverView.page');

describe("Swag Labs -> Check Out Overview Operation", () => {

    /**
     * Load conection to Overview purchase Page
     */
    it('Load conection to Overview purchase Page', async () => {

        //Loading Login page
        login.open();

        //Login to Swag Labs
        await login.login('standard_user', 'secret_sauce');
        await browser.pause(500);

        //adding products to my cart
        await inventory.AddingProductsbyId(0);
        await inventory.AddingProductsbyId(3);
        inventory.openCart();

        await browser.pause(1000);

        //checkout product in my cart
        CartPage.goToCheckout();

        //wating to show 
        await browser.pause(1000);
    });

    /**
     * Checkout my personal information 
     */
    it('Checkout my personal information and purchase summary ', async () => {

        // setting data 
        await CheckOutOverView.submitPersonalInfo('Fender Josue', 'Mora Calero', '14100');
        await browser.pause(1000);

        // Url expected
        expect(browser).toHaveUrl('/checkout-step-one.html');
        await browser.pause(1000);

    });


    /**
     * Checkout my personal information 
     */
    it('Validate that “THANK YOU FOR YOUR ORDER” is displayed ', async () => {

        //moving to Finish Page
        CheckOutOverView.finishShopping();

        //Url Validation
        await browser.pause(2000);
        expect(browser).toHaveUrl('/checkout-complete.html');

        //searching by tag Title h2
        const classNameAndText = await $('<h2 />')

        //waiting to response
        await browser.pause(1000);

        //expect validation of the test
        expect(await classNameAndText.getText()).toContain(
            'THANK YOU FOR YOUR ORDER',
            'Wrong Message',
        );
    });


});


// });
