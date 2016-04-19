var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

var dst = './dst/';
var src = './src/';


gulp.task('minify', function() {
  return gulp.src(src + '*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(dst));
});

gulp.task('minify-css', function () {
    gulp.src(src + 'css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest(dst + '/css/'));
});

gulp.task('compress', function() {
  return gulp.src(src + '/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(dst + '/js/'));
});

gulp.task('default', ['minify', 'minify-css', 'compress']);
