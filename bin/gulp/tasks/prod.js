'use strict';

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var runSequence = require('run-sequence');

var config = require('../configs/config.js');

// Tasks
require('./browserify-prod');
require('./sass');
require('./imagemin-prod');
require('./copy');

gulp.task('prod', function(callback){

    callback = callback || function() {};
    runSequence([ 'browserify-prod', 'imagemin-prod', 'copy'], callback);

});