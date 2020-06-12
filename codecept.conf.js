const { setHeadlessWhen } = require('@codeceptjs/configure')

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS)

exports.config = {
  tests: './__e2e__/*.test.js',
  output: './__e2e__/output',
  helpers: {
    Puppeteer: {
      url: 'http://127.0.0.1:8080',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'github-explorer',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    customLocator: {
      enabled: true,
      attribute: 'data-test'
    }
  }
}
