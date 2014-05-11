var gulp = require('gulp'),
    clean = require('gulp-clean');

module.exports = function() {
    return gulp.src(['dist/assets/**'], {read: false})
        .pipe(clean());
};