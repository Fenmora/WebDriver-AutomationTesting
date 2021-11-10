# Nicasource-AutomationTesting
AutomationTesting

------------------------------------------------------------------------------------
* QA Tester Assessment
* @author       Fender Mora
* @description  Login to the https://www.saucedemo.com/
* @date         07-11-2021 14:02
* @email        fenmora@outlook.es
* ----------------------------------------------------------------------------------

---------------------
 * Folder estructure
---------------------
webdriverio-test

├── nodule_modules
│   
├── test
│      ├── pageobjects
│      ├── specs
│         ├── swagTest
│         └── SwagLabsAllFlow.js            
└── wdio.conf

------------------------------------------------------------------------------------
 * Run test individual or all flow
------------------------------------------------------------------------------------
 specs: [
        
        // inidividual test
        "./test/specs/swagTest/*.js",

        // Uncomment this to run all flow
        // './test/specs/*.js'
    ]
