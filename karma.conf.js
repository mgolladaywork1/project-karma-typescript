// Karma configuration
// Generated on Fri Apr 20 2018 22:13:05 GMT-0700 (Pacific Daylight Time)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'karma-typescript', 'fixture'],


    // list of files / patterns to load in the browser
    files: [
      'src/**/*.ts',
      'spec/**/*.spec.ts',
      'spec/**/*.fixture.html'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.ts': ['karma-typescript'],
      "spec/**/*.ts": ['karma-typescript'],
      'spec/**/*.html': ['html2js'],
      'spec/**/*.json': ['json_fixtures']
    },

    jsonFixturesPreprocessor: {
      variableName: '__json__'
    },


    // test results reporter to use
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'karma-typescript'],


    coverageReporter: {
      type: 'html',
      dir: 'coverage',
      instrumenterOptions: {
        istanbul: { noCompact: true }
      }
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
