'use strict';

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var gutil        = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');

var config = require('../configs/config.js');

gulp.task('sass', function () {
    gulp.src(config.dev.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(config.dev.css));
});