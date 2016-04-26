'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

/*
 Gulp will run a server in the port 8080 with ./app folder on it
 */
gulp.task('connect', function () {
    browserSync.init({
        notify: false,
        port: 8080,                         // localhost:8080
        timestamps: true,                         // localhost:8080
        server: {
            baseDir: '.'               // Main app folder
        }
    });
});

gulp.task('start', ['connect']);