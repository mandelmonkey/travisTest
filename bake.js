"use strict";

var wd = require("wd");
 
  var driver; 
   
    var serverConfig = {
      host: '0.0.0.0',
      port: 4723
    };
    
    driver = wd.promiseChainRemote(serverConfig);
   
    require("./helpers/logging").configure(driver);
    
    var desired = {
      browserName: '',
      platformName: 'iOS',
      platformVersion: '12.0',
      deviceName: 'iPhone X',
      automationName: "XCUITest",
      useNewWDA: true,
      noReset: true,
      showXcodeLog: true,
      app: process.cwd() + "/build/iphone/build/Products/Debug-iphonesimulator/travisTest.app"
    };
    console.log("h7")
    driver.init(desired);
    
    driver.quit();

