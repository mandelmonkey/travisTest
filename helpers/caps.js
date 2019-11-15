exports.ios = {
  browserName: '',
  //'appium-version': '1.6',
  platformName: 'iOS',
  platformVersion: '13.0',//13.0
  deviceName: 'iPhone X',//'iPhone 11 Pro Max',
  automationName: "XCUITest",
      useNewWDA:true,
      noReset: true,
      showXcodeLog:true, 
      app: undefined // will be set later
};