var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    notify = require('gulp-notify');

module.exports = function() {
    return gulp.src('src/assets/images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/assets/images'))
        .pipe(notify({ message: 'Images task complete' }));
};