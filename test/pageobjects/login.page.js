/********************************************************************
* LoginPage
* @author       Fender Mora
* @description  LoginPage  to the https://www.saucedemo.com/
* @date         06-11-2021 14:02
*********************************************************************/

const Page = require("./page");
const SCREEN_SELECTOR = "#login_button_container";
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    // constructor
    constructor() {
        super(SCREEN_SELECTOR);
    }

    // input username
    get inputUsername() {
        return $("#user-name");
    }

    // input password
    get inputPassword() {
        return $("#password");
    }
    // login button
    get btnSubmit() {
        return $("#login-button");
    }


    /**
     * Login authentication
     * @param {*} username 
     * @param {*} password 
     */
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     *  Open conection to web swag labs
     * @returns return link to conection
     */
    open() {
        return super.open("/");
    }

}

module.exports = new LoginPage();
