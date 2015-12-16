var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var config = require('../configs/config.js');

gulp.task('copy', function() {

    // Copy html
    gulp.src(config.dev.sync + '*.html')
        .pipe(gulp.dest(config.prod.base));

    // Copy css
    gulp.src(config.dev.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(config.prod.css));

});