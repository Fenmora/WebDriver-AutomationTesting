# Nicasource-AutomationTesting
AutomationTesting

------------------------------------------------------------------------------------
* QA Tester Assessment
* @author       Fender Mora
* @description  Login to the https://www.saucedemo.com/
* @date         07-11-2021 14:02
* @email        fenmora@outlook.es
* ----------------------------------------------------------------------------------

Project Sctructure
```
my-app/
  README.md
  node_modules/
  Test/
     wdio.conf.js
     pageobjects/
     utilities/
     Specs/
       SwagLabsAllFlow.js
        Pageobject/
          CartOperation.css
          CheckOutOverView.js
          InventoryOperation.js
          LoginOperation.js
```


Install dependencies

-npm install (once all the packages are installed).

Run the project 

-npx wdio wdio.conf.js 

By default the individual tests will be executed. if you want to run all automation tests in one flow, you need to do the following modification.

1. go to my-app/Test/wdio.conf.js and go to the line #24 and replace the next code to run the entire flow linearly

    specs: [
        
        // all flow test
        './test/specs/*.js'
    ],
