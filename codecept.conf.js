const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './newsletter-subscription.test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.hoeffner.de',
      show: true,
      windowSize: '1200x900'
    },
    MailSlurp: {
      require: '@codeceptjs/mailslurp-helper',
      apiKey: 'd051a134b6f4dc8f3c97496e9e4ada806e75eeaff277c297d35a1e2f29e123e4'
    },
  },
  include: {
    I: './steps_file.js',
    Cookies: './page-objects',
    Newsletters: './page-objects/newsletters'
  },
  bootstrap: null,
  mocha: {},
  name: 'acceptance-tests-hoeffner',
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
    }
  }
}