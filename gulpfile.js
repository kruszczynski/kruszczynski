var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass')
var minifyCSS = require('gulp-minify-css');

gulp.task('sass', function () {
    gulp.src('./_css/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets'));
});

gulp.task('minify-css', function() {

  gulp.src('./assets/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./assets/'))
});

gulp.task('default', ['sass', 'minify-css']);
