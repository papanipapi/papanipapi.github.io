'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
 
sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('assets/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('stylesheets'))
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {
  browserSync.init({
    proxy: "local.portfolio"
  });

  gulp.watch('assets/sass/*.scss', gulp.series('sass'));
  gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('serve'));