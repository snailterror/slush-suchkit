var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

var config = require('../configs/config.js');

gulp.task('imagemin', function () {
    return gulp.src(config.dev.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest(config.prod.img));
});