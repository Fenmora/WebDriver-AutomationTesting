// /********************************************************************
// * Test #2
// * @author       Fender Mora
// * @description  Login to the https://www.saucedemo.com/
// * @date         05-11-2021 14:02
// *********************************************************************/

// const login = require('../../pageobjects/login.page');

// describe("Swag Labs Login Page", () => {

//     it('Load url to be able', async () => {
//         await login.open();
//         await login.waitForIsShown();
//         await expect(browser).toHaveTitle("Swag Labs");
//     });

//     // Verify input are empty
//     it("Verify that the input contains their respective values", async () => {
//         await expect(login.inputUsername).toHaveText('');
//         await expect(login.inputPassword).toHaveText('')
//         await browser.pause(500);
//     });


//     // Verify user was logged in successfully
//     it("should login with valid credentials", async () => {
//         await login.login('standard_user', 'secret_sauce');
//         await browser.pause(500);

//         expect(browser).toHaveUrl('/inventory.html');

//     });

//     // Verify user was logged in successfully
//     it("Menu validation event and Click to Inventory", async () => {

//         //Menu Sidebar Click 
//         login.btnMenuNavbar.click();
//         await browser.pause(500);

//         //Inventory Click
//         login.btnInventoryMenu.click();
//         await browser.pause(500);

//         //Inventory expected
//         expect(await login.getItemStock()).toEqual(
//             6,
//             'Amount of items was not equal to 6',
//         );
//     });

//     //Verify Sorting of items in stock
//     it('should be able to sort the items', async () => {

//         //sorting by price high to low
//         login.selectProductOrder('Price (high to low)');
//         await browser.pause(500);

//         //looking for the product with major price
//         expect(await login.listInventoryItemsName[0].getText()).toContain(
//             'Sauce Labs Fleece Jacket',
//             'Sorted order is not correct',
//         );
//         await browser.pause(3000);
//     });

//     //Adding to the cart from principal inventory page
//     it('should be able to Adding to the cart from principal inventory page', async () => {


//         //Adding first product
//         await login.AddingProductsbyId(5);

//         expect(await login.getSwagText(0)).toContain(
//             'Sauce Labs Backpack',
//             'Initial order is not correct',
//         );

//         //Adding second product
//         await login.AddingProductsbyId(0);


//         //Adding third product
//         await login.AddingProductsbyId(3);

//         //Adding Fourth product
//         await login.AddingProductsbyId(4);

//         //Removing second product
//         await login.RemoveProductsbyId(0);

//         //open cart
//         login.openCart();
//         await browser.pause(3000);
//     });

//     //Checkout products in my cart
//     it('Checkout products in my cart', async () => {

//         //counting element in my cart y evaluate the expected value
//         expect(await login.getItemInCart()).toEqual(
//             2,
//             'Amount of items was not equal to 2',
//         );

//         await browser.pause(1000);

//         //click checkout
//         login.goToCheckout();
//         await browser.pause(3000);
//     });

//     //Checkout my personal information 
//     it('Checkout my personal information and purchase summary ', async () => {

//         // setting data 
//         await login.submitPersonalInfo('Fender Josue', 'Mora Calero', '14100');
//         await browser.pause(1000);

//         expect(browser).toHaveUrl('/checkout-step-one.html');
//         await browser.pause(1000);

//     });

//     //Checkout my personal information 
//     it('Validate that “THANK YOU FOR YOUR ORDER” is displayed ', async () => {

//         //moving to Finish Page
//         login.finishShopping();

//         //Url Validation
//         await browser.pause(2000);
//         expect(browser).toHaveUrl('/checkout-complete.html');

//         //searching by tag Title h2
//         const classNameAndText = await $('<h2 />')

//         //waiting to response
//         await browser.pause(1000);

//         //expect validation of the test
//         expect(await classNameAndText.getText()).toContain(
//             'THANK YOU FOR YOUR ORDER',
//             'Wrong Message',
//         );
//     });

// });
