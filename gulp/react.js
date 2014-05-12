var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


module.exports = function() {
    return gulp.src(['src/assets/scripts/app.jsx'])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ],
            extensions: ['.jsx']
        }))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('dist/assets/scripts'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/scripts'));
};