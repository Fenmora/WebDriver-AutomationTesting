/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    constructor(selector) {
        this.selector = selector;
    }
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        return browser.url(`https://www.saucedemo.com${path}`)
    }
    /**
   * Wait for the element to be displayed
   *
   * @return {boolean}
   */
    waitForIsShown(isShown = true) {
        try {
            return $(this.selector).waitForDisplayed({
                timeout: 15000,
                reverse: !isShown
            });
        } catch (e) {
            return !isShown;
        }
    }

    /**
     * Give back if the element is displayed
     *
     * @return {boolean}
     */
    isDisplayed() {
        return $(this.selector).isDisplayed();
    }
}
