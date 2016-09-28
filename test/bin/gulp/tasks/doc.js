'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');
var typedoc = require("gulp-typedoc");

var config = require('../configs/config.js');

gulp.task("typedocs", function() {
    return gulp
        .src(config.doc.tsFiles)
        .pipe(typedoc({
            module: "commonjs",
            target: "es5",
            out: config.doc.dest,
            name: config.doc.name,
            readme: config.doc.readme,
            excludeExternals: true,
            includeDeclarations: true,
            ignoreCompilerErrors: true,
            version: true
        }));
});

gulp.task('doc', function(callback){

    callback = callback || function() {};
    runSequence([ 'typedocs' ], callback);

});
