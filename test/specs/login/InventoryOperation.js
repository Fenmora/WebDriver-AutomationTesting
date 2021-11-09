/********************************************************************
* Test #2
* @author       Fender Mora
* @description  Testing Inventory Page  to the https://www.saucedemo.com/
* @date         06-11-2021 14:02
*********************************************************************/
const login = require('../../pageobjects/login.page');
const inventory = require('../../pageobjects/inventory.page');

describe("Swag Labs -> Inventory Operation", () => {

    /**
     * Verify user was logged in successfully
     */
    it("Menu validation event and Click to Inventory", async () => {

        //open conection
        login.open();

        //login success
        await login.login('standard_user', 'secret_sauce');
        await browser.pause(500);

        //open navbar Menu
        inventory.openMenu();
        await browser.pause(500);

        //Open inventory 
        inventory.openInventory()
        await browser.pause(500);

        //Inventory expected
        expect(await inventory.getItemStock()).toEqual(
            6,
            'Amount of items was not equal to 6',
        );
    });

    /**
     * Verify Sorting of items in stock
     */
    it('should be able to sort the items', async () => {

        //sorting by price high to low
        inventory.selectProductOrder('Price (high to low)');
        await browser.pause(500);

        //looking for the product with major price
        expect(await inventory.listInventoryItemsName[0].getText()).toContain(
            'Sauce Labs Fleece Jacket',
            'Sorted order is not correct',
        );
        await browser.pause(3000);
    });


    /**
     * Adding to the cart from principal inventory page
     */
    it('should be able to Adding to the cart from principal inventory page', async () => {


        //Adding first product
        await inventory.AddingProductsbyId(5);

        expect(await inventory.getItemName(0)).toContain(
            'Sauce Labs Backpack',
            'Initial order is not correct',
        );

        //Adding second product
        await inventory.AddingProductsbyId(0);


        //Adding third product
        await inventory.AddingProductsbyId(3);

        //Adding Fourth product
        await inventory.AddingProductsbyId(4);

        //Removing second product
        await inventory.RemoveProductsbyId(0);

        //open cart
        inventory.openCart();
        await browser.pause(3000);
    });
});
