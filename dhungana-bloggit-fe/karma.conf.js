module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular/cli'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage-istanbul-reporter'),
        require('@angular/cli/plugins/karma')
      ],
      client:{
        clearContext: false
      },
      coverageIstanbulReporter: {
        reports: [ 'html', 'lcovonly' ],
        fixWebpackSourcePaths: true
      },
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: false
    });
  };