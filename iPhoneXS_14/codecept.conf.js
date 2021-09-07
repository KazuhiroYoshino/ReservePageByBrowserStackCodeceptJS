exports.config = {
  tests: 'reserve_test/*_test.js',
  output: '../output',
  helpers: {
   Appium: {
     host: "hub-cloud.browserstack.com",
     port: 4444,
     user: 'ここにUser Name',
     key: 'ここにAccess Key',
     platform: "iOS",
     url: 'http://example.selenium.jp/reserveApp_Renewal/',
//            smartWait: 5000,
//            waitForTimeout: 20000,
     desiredCapabilities: {
       realMobile: "true",
       device: "iPhone XS",
       os_version: "14",
       browserName: "safari"
     }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'iPhoneXS_14',
  translation: 'ja-JP',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true
    }
  }
}