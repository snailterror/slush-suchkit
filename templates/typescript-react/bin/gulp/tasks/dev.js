'use strict';

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var runSequence = require('run-sequence');

var config = require('../configs/config.js');

// Tasks
require('./browserify');
require('./sass');
require('./browsersync');
require('./imagemin');

gulp.task('dev', function(callback){

    callback = callback || function() {};
    gulp.watch([config.dev.sass, config.dev.sassPart], ['sass']);
    runSequence([ 'browserify', 'browsersync' ], callback);

});
