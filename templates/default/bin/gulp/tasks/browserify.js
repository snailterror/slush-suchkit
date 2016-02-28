'use strict';

var gulp        = require('gulp');
var gutil       = require('gulp-util');

// Browserify
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var browserify = require('browserify');
var watchify   = require('watchify');
var babelify   = require('babelify');
var rename     = require('gulp-rename');
var uglify     = require('gulp-uglify');

var config = require('../configs/config.js');

gulp.task('browserify', function() {

    console.log(config.dev.base + 'app.js', config.dev.js);
    var bundler = browserify({
        entries: [config.dev.jsFile],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }).transform(babelify);

    var watcher  = watchify(bundler);

    return watcher
        .on('update', function () {
            var updateStart = Date.now();
            console.log('Updating!');
            watcher.bundle()
                .on('error', gutil.log.bind(gutil, 'Browserify Error', gutil.colors.red('411')))
                .pipe(source(config.dev.jsFile))
                .pipe(buffer())
                .on('error', gutil.log)
                .pipe(rename('app.js'))
                .pipe(gulp.dest(config.dev.js));
            console.log('Updated!', (Date.now() - updateStart) + 'ms');
        })
        .transform(babelify)
        .bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error', gutil.colors.red('411')))
        .pipe(source(config.dev.jsFile))
        .pipe(rename('app.js'))
        .pipe(gulp.dest(config.dev.js));
});


gulp.task('browserify-prod', function() {

    var bundler = browserify({
        entries: [config.dev.jsFile],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    }).transform(babelify);

    bundler
        .bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error', gutil.colors.red('411')))
        .pipe(source(config.dev.jsFile))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(rename('app.js'))
        .pipe(gulp.dest(config.prod.js));
});