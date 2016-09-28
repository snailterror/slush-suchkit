'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

var config = require('../configs/config.js');

// Tasks
require('./browserify');

gulp.task('prod', function(callback){

    callback = callback || function() {};
    runSequence([ 'browserify-prod' ], callback);

});