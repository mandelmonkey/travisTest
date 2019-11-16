"use strict";

var wd = require("wd");
console.log("h1")
describe("ios simple", function () {
  var driver;
  var allPassed = true;
  console.log("h2")
  before(function () {
    console.log("h3")
    var serverConfig = {
      host: '0.0.0.0',
      port: 4723
    };
    console.log("h4")
    driver = wd.promiseChainRemote(serverConfig);
    console.log("h5")
    require("./helpers/logging").configure(driver);
    console.log("h6")
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
    return driver.init(desired);
  });

  after(function () {
    console.log("h8")
    return driver
      .quit()
      .finally(function () {
        if (process.env.npm_package_config_sauce) {
          return driver.sauceJobStatus(allPassed);
        }
      });
  });

  afterEach(function () {
    console.log("h9")
    allPassed = allPassed && this.currentTest.state === 'passed';
  });

  it("Should do a test", function () {
    console.log("h10")
    return true;
  });
});