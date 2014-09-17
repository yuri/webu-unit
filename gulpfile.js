var gulp = require('gulp');
var rg = require('rangle-gulp');

// Makes a task that runs Karma.
gulp.task('karma', rg.karma({
  karmaConf: 'client/testing/karma.conf.js',
  vendor: [
    'client/bower_components/angular/angular.js',
    'client/bower_components/angular-mocks/angular-mocks.js',
    'client/bower_components/sinon-chai/lib/sinon-chai.js',
    'client/testing/lib/q.js',
    'client/testing/test-utils.js'
  ],
  files: [
    'client/bower_components/lodash/dist/lodash.js',
    'client/app/*.js',
    'client/app/**/*.js'
  ]
}));