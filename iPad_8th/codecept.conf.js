const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

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
            waitForTimeout: 90000,
            desiredCapabilities: {
                  realMobile: "true",
                  device: "iPad 8th",
                  os_version: "14",
                  browserName: "Safari",
//                  idleTimeout : "900"
                }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'ReservePageByBrowserStackiPad',
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