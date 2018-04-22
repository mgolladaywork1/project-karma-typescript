// Karma configuration
// Generated on Fri Apr 20 2018 22:13:05 GMT-0700 (Pacific Daylight Time)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'fixture'],


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
      '**/*.ts': ['typescript'],
      '**/*.html': ['html2js'],
      '**/*.json': ['json_fixtures'],
      '**/*.js': ['coverage']
    },

    // regarding json preprocessing
    jsonFixturesPreprocessor: {
      variableName: '__json__'
    },

    typescriptPreprocessor: {
      options: {
        sourceMap: true, // (optional) Generates corresponding .map file.
        outDir: 'dist/',
        target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
        module: 'commonjs', // (optional) Specify module code generation: 'commonjs' or 'amd'
        noImplicitAny: true, // (optional) Warn on expressions and declarations with an implied 'any' type.
        noResolve: false, // (optional) Skip resolution and preprocessing.
        removeComments: true // (optional) Do not emit comments to output.
      },
      transformPath: function (path) {
        return path.replace(/\.ts$/, '.js');
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    coverageReporter: {
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
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
