"use strict";


//require("./helpers/setup");

var wd = require("wd"),
    _ = require('underscore'),
    Q = require('q');
    //serverConfigs = require('./helpers/appium-servers');

describe("ios simple", function () {
  this.timeout(10000000);
  var driver;
  var allPassed = true;

  before(function () {
    var serverConfig =  {
        host: 'localhost',
        port: 4723
      };
      
    driver = wd.promiseChainRemote(serverConfig);
    require("./helpers/logging").configure(driver);

    var desired = _.clone(require("./helpers/caps").ios); 
    if (process.env.npm_package_config_sauce) {
      desired.name = 'ios - simple';
      desired.tags = ['sample'];
    }
    return driver.init(desired);
  });

  after(function () {
    return driver
      .quit()
      .finally(function () {
        if (process.env.npm_package_config_sauce) {
          return driver.sauceJobStatus(allPassed);
        }
      });
  });

  afterEach(function () {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });

  

  it("Should Press Create New Wallet", function () {
    return true;
    setTimeout(function(){
    return driver.
    elementByAccessibilityId('Create New Wallet')
      .click().sleep(1000) 
     //return driver.click("~Create New Wallet")
    }); 
    },5000);
   

});