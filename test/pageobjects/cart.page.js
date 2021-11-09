/********************************************************************
* CartPage
* @author       Fender Mora
* @description  Cat Item Events to the https://www.saucedemo.com/
* @date         07-11-2021 14:02
*********************************************************************/
const Page = require("./page");
const SCREEN_SELECTOR = "#login_button_container";

class CartPage extends Page {

    // Constructor
    constructor() {
        super(SCREEN_SELECTOR);
    }

    // Continue checkout button
    get checkoutButton() {
        return $('.checkout_button');
    }
    // Get Array of the cart items
    get cartItems() {
        return $$('.cart_item');
    }

    /**
     * checkoutButton Event Click
     */
    goToCheckout() {
        this.checkoutButton.click();
    }

    /**
     * Get the count element in the Cat Item
     * @returns (number) the number of elements in the array
     */
    async getItemInCart() {
        return this.cartItems.length;
    }
}

module.exports = new CartPage();
