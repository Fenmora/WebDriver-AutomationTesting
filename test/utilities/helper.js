/**
* Test #1
* @author       Fender Mora
* @description  Wait information is display in screen
* @date         05-11-2021 14:02
*/

export const waitForTextChange = (el, text, timeout) => {
  browser.waitUntil(
    function () {
      return el.getText() === text;
    },
    { timeout }
  );
};

export const waitAndClick = (el, timeout) => {
  el.waitForDisplayed({ timeout });
  el.click();
};