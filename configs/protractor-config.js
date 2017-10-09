/**
 * Created by S752 on 14.07.2017.
 */
require('babel-register')({ presets: ['es2015'] });

const config = require('./app.js');
const SpecReporter = require('jasmine-spec-reporter');
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const Jasmine2ScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

// noinspection JSAnnotator
exports.config = {
  /**
   *  Uncomment ONE of the following to connect to: seleniumServerJar OR directConnect. Protractor
   *  will auto-start selenium if you uncomment the jar, or connect directly to chrome/firefox
   *  if you uncomment directConnect.
   */
  // seleniumServerJar: "node_modules/protractor/node_modules/
  // webdriver-manager/selenium/selenium-server-standalone-3.3.1.jar",
  directConnect: false,

  specs: ['../spec/search_hotel.spec.js'],
  baseUrl: config.baseUrl,
  // framework: 'jasmine2',

  onPrepare() {
    // set browser size...
    browser.manage().window().setSize(1280, 1024);
    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter());
    jasmine.getEnv().addReporter(new Jasmine2ScreenshotReporter());
    true;

    './screens';
    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'spec' }));
  },

  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
    chromeOptions: {
      args: [
        // disable chrome's wakiness
        '--disable-infobars',
        '--disable-extensions',
        'no-sandbox',
        'verbose',
        'log-path=/tmp/chromedriver.log',
      ],
      prefs: {
        // disable chrome's annoying password manager
        'profile.password_manager_enabled': false,
        credentials_enable_service: false,
        password_manager_enabled: false,
      },
    },
  },

  jasmineNodeOpts: {
    showColors: true,
    displayStacktrace: true,
    displaySpecDuration: true,
    // overrides jasmine's print method to report dot syntax for custom reports
    print() {},
    defaultTimeoutInterval: 500000,
  },
};
