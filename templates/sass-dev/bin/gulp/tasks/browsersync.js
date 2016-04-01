var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var config = require('../configs/config.js');

gulp.task('browsersync', function() {
    browserSync.init({
        server : {
            baseDir: config.dev.sync,
            index: 'index.html'
        }
    });

    gulp.watch([config.dev.sync + "*.html", config.dev.css + "*.css"]).on('change', browserSync.reload);

});