const Page = require("./page");
const SCREEN_SELECTOR = "#login_button_container";
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SwagLabsAllFlow extends Page {
    /**
     * define selectors using getter methods
     */

    get inputUsername() {
        return $("#user-name");
    }
    get inputPassword() {
        return $("#password");
    }
    get btnSubmit() {
        return $("#login-button");
    }

    get btnMenuNavbar() {
        return $("#react-burger-menu-btn");
    }
    get btnInventoryMenu() {
        return $("#inventory_sidebar_link");
    }
    get listInventoryItems() {
        return $$(".inventory_item");
    }
    get listInventoryItemsName() {
        return $$(".inventory_item_name");
    }
    get listInventoryItemsPrice() {
        return $$(".inventory_item_price");
    }

    get swagItems() {
        return $$('.inventory_item');
    }

    get cart() {
        return $(".shopping_cart_link");
    }

    get productFilter() {
        return $(".product_sort_container");
    }

    get addButton() {
        return $('.btn_primary.btn_inventory');
    }

    get removeButton() {
        return $('.btn_secondary.btn_inventory');
    }

    get goBackButton() {
        return $('.inventory_details_back_button');
    }

    get cartItems() {
        return $$('.cart_item');
    }

    // get checkOutFinish() {
    //     return $('.btn_secondary.cart_button');
    // }
    get continueShoppingButton() {
        return $('.btn_secondary');
    }
    get checkoutButton() {
        return $('.checkout_button');
    }


    /*************************************************
     * checkout values
     * **********************************************
     */
    get cancelButton() {
        return $('.cart_cancel_link');
    }

    get continueCheckoutButton() {
        return $('.cart_button');
    }

    get firstName() {
        return $('[data-test="firstName"]');
    }

    get lastName() {
        return $('[data-test="lastName"]');
    }

    get postalCode() {
        return $('[data-test="postalCode"]');
    }
    get btnfinish() {
        return $('[data-test="finish"]');
    }
    get errorMessage() {
        return $('[data-test="error"]');
    }
    get removeButtonFromMyCart() {
        return $('.btn_action.cart_button');
    }

    constructor() {
        super(SCREEN_SELECTOR);
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    // async inventoryCount() {
    //     return listInventoryItemName.length;
    // }
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open("/");
    }

    openMenu() {
        this.btnMenuNavbar.click();
    }

    openInventory() {
        this.btnInventoryMenu.click();
    }

    /**
     * Get the total in stock of items listed on the page
     * @returns {number}
     */
    async getItemStock() {
        return this.listInventoryItems.length;
    }

    /**
      * Get the total in stock of items listed on the page
      * @returns {number}
      */
    async getItemInCart() {
        return this.cartItems.length;
    }

    /**
     * Select the order based on visible text
     *
     * @param {string} text
     */
    async selectProductOrder(text) {
        this.productFilter.selectByVisibleText(text);
    }

    async getItemIndex(product) {
        return this.listInventoryItems.length;
    }


    /*************************************************
     * Click a detalle de productos
     * **********************************************
     */

    async AddingProductsbyId(index) {
        //opening view
        this.openDetailView(index);
        await browser.pause(2000);

        //adding to cart
        this.addToCart();
        await browser.pause(2000);

        //back to main menu
        this.goBack();
        await browser.pause(2000);

    }

    async RemoveProductsbyId(index) {
        //opening view
        this.openDetailView(index);
        await browser.pause(2000);

        //adding to cart
        this.removeFromCart();
        await browser.pause(2000);

        //back to main menu
        this.goBack();
        await browser.pause(2000);

    }

    openDetailView(index) {

        this.listInventoryItems[index].$('.inventory_item_name').click();
    }
    /**
     * Add a swag items to the cart
     */
    addToCart() {
        this.addButton.click();
    }

    /**
     * Remove a swag items from the cart
     */
    removeFromCart() {
        this.removeButton.click();
    }

    /**
     * Open the cart
     */
    openCart() {
        this.cart.click();
    }

    /**
   * Continue shopping
   */
    continueShopping() {
        this.continueShoppingButton.click();
    }

    /**
      * Continue shopping
      */
    finishShopping() {
        this.btnfinish.click();
    }
    /**
     * Go back to the inventory list
     */
    goBack() {
        this.goBackButton.click();
    }
    /**
       * Go to the checkout process
       */
    goToCheckout() {
        this.checkoutButton.click();
    }
    swag(needle) {
        if (typeof needle === 'string') {
            return this.swagItems.find(swagItem => swagItem.getText().includes(needle));
        }

        return this.swagItems[needle];
    }


    async getSwagText(needle) {
        return this.swag(needle).getText();
    }


    /**
    * Go to the checkout process
    */

    async submitPersonalInfo(firstName, lastName, zip) {
        // const {firstName, lastName, zip  } = personalInfo;

        this.waitForIsShown();
        this.firstName.addValue(firstName);
        this.lastName.addValue(lastName);
        this.postalCode.addValue(zip);
        await browser.pause(2000);
        this.continueCheckoutButton.click();
        await browser.pause(2000);
    }

}

module.exports = new SwagLabsAllFlow();
