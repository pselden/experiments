var gulp = require('gulp'),
    clean = require('gulp-clean');

module.exports = function() {
    return gulp.src(['dist/styles', 'dist/scripts', 'dist/images'], {read: false})
        .pipe(clean());
};