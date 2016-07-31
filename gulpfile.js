var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass')
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
    gulp.src('./_css/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets'));
});

gulp.task('minify-css', function() {

  gulp.src('./assets/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./assets/'))
});

gulp.task('default', ['sass', 'minify-css']);
