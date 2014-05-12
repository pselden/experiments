var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('styles', require('./gulp/styles'));
gulp.task('scripts', require('./gulp/react'));
gulp.task('images', require('./gulp/images'));
gulp.task('clean', require('./gulp/clean'));

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images');
});

// Watch
gulp.task('watch', function() {

    gulp.watch('src/assets/styles/**', ['styles']);
    gulp.watch('src/assets/scripts/**', ['scripts']);
    gulp.watch('src/assets/images/**', ['images']);

    var server = livereload();

    // Watch any files in dist/, reload on change
    gulp.watch(['dist/**']).on('change', function(file) {
        server.changed(file.path);
    });
});