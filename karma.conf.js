// Karma configuration
// Generated on Tue Sep 27 2016 00:25:28 GMT-0500 (Central Daylight Time)

module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      './node_modules/angular/angular.js',                             // angular
      './node_modules/angular-mocks/angular-mocks.js',                 // mocks
      './node_modules/angular-route/angular-route.js',                 // angular-route
      './app/services/user.service.js',                                // user service
      './app/table/table.controller.js',                               // user service
      './app/app.js',                                                  // angular app
      './app/services/user.service.spec.js',                           // user service test file
      './app/table/table.controller.spec.js'                           // table controller test file
    ],

    exclude: [
    ],

    preprocessors: {
    },

    reporters: ['spec'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity
  })
}
