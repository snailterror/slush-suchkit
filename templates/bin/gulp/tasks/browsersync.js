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

    gulp.watch([config.dev.base + "*.html", config.dev.css + "*.css", config.dev.js+"*.js"]).on('change', browserSync.reload);

});