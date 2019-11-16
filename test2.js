"use strict";

var wd = require("wd");

describe("ios simple", function () {
  this.timeout(10000000);
  var driver;
  var allPassed = true;

  before(function () {
    var serverConfig = {
      host: 'localhost',
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

  it("Should do a test", function () {
    return true;
  });
});