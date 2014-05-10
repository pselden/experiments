// Load plugins
var gulp = require('gulp');

var imagesTask = require('./gulp/images');
var stylesTask = require('./gulp/styles');
var scriptsTask = require('./gulp/scripts');
var cleanTask = require('./gulp/clean');

var livereload = require('gulp-livereload');

gulp.task('styles', stylesTask);
gulp.task('scripts', scriptsTask);
gulp.task('images', imagesTask);
gulp.task('clean', cleanTask);

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images');
});

// Watch
gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch('src/styles/**/*.scss', ['styles']);

    // Watch .js files
    gulp.watch('src/scripts/**/*.js', ['scripts']);

    // Watch image files
    gulp.watch('src/images/**/*', ['images']);

    // Create LiveReload server
    var server = livereload();

    // Watch any files in dist/, reload on change
    gulp.watch(['dist/**']).on('change', function(file) {
        server.changed(file.path);
    });

});