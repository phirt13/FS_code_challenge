'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');

gulp.task('sass', function() {

  gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(minifyCSS({compaibility: 'ie8'}))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {

  gulp.watch('./app/sass/**/*.scss', ['sass']);
});

gulp.task('build', ['sass']);
gulp.task('default', ['build']);
