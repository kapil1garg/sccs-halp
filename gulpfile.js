
// Load gulp and other required modules
var gulp = require('gulp'),
    jshint = require('gulp-jshint');

// Lint javascript cloud code
gulp.task('lint', function () {
  gulp.src(['./client/*.js', './server/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function () {
  gulp.watch('./client/*.js', ['lint']);
  gulp.watch('./server/*.js', ['lint']);
});

gulp.task('default', ['watch']);