/********************************************************************
* CheckOutOverView
* @author       Fender Mora
* @description  Validation Form Events to the https://www.saucedemo.com/
* @date         07-11-2021 14:02
*********************************************************************/

const Page = require("./page");
const SCREEN_SELECTOR = "#login_button_container";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckOutOverView extends Page {

    // Constructor
    constructor() {
        super(SCREEN_SELECTOR);
    }

    // Input Validation Form get First Name
    get firstName() {
        return $('[data-test="firstName"]');
    }

    // Input Validation Form get  Last Name
    get lastName() {
        return $('[data-test="lastName"]');
    }

    // Input Validation Form get Postal code
    get postalCode() {
        return $('[data-test="postalCode"]');
    }

    //btn continue 
    get continueCheckoutButton() {
        return $('.cart_button');
    }

    //btn end purchase 
    get btnfinish() {
        return $('[data-test="finish"]');
    }

    /**
     * continueCheckoutButton Event Click
     */
    finishShopping() {
        this.btnfinish.click();
    }

    /**
     * Setting data into Validation Form
     * @param {*} firstName 
     * @param {*} lastName 
     * @param {*} zip 
     */
    async submitPersonalInfo(firstName, lastName, zip) {

        this.waitForIsShown();
        this.firstName.addValue(firstName);
        this.lastName.addValue(lastName);
        this.postalCode.addValue(zip);

        await browser.pause(2000);
        this.continueCheckoutButton.click();
        await browser.pause(2000);
    }
}

module.exports = new CheckOutOverView();
