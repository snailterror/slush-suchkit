var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jpegtran = require('imagemin-jpegtran');

var config = require('../configs/config.js');

gulp.task('imagemin-prod', function () {
    return gulp.src(config.dev.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant({quality: '65-80', speed: 4}), jpegtran({progressive: true})]
        }))
        .pipe(gulp.dest(config.prod.img));
});