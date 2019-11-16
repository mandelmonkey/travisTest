exports.ios = {
  browserName: '',
  //'appium-version': '1.6',
  platformName: 'iOS',
  platformVersion: '13.2',//13.0
  deviceName: 'iPhone X',//'iPhone 11 Pro Max',
  automationName: "XCUITest",
      useNewWDA:true,
      noReset: true,
      showXcodeLog:true, 
      app: process.cwd()+"/build/iphone/build/Products/Debug-iphonesimulator/test.app"
};