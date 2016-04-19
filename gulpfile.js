var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

var dst = './dst/';
var src = './src/';

gulp.task('copy-all',function(){
    return gulp.src(src + '/*')
        .pipe(gulp.dest(dst));
});

gulp.task('minify-html-root', ['copy-all'], function() {
  return gulp.src(src + '*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(dst));
});

gulp.task('minify-html-views', ['copy-all'], function() {
  return gulp.src(src + 'views/' + '*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(dst));
});

gulp.task('minify-css', ['copy-all'], function () {
    gulp.src(src + 'css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest(dst + 'css/'));
});

gulp.task('compress-js', ['copy-all'], function() {
  return gulp.src(src + '/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(dst + 'js/'));
});

gulp.task('compress-imgs', ['copy-all'], function() {
	return gulp.src(src + '/img/*')
		.pipe(imagemin({}))
		.pipe(gulp.dest(dst + 'img/'));
});

gulp.task('default', ['copy-all','minify-html-root','minify-html-views','compress-imgs','compress-js','minify-css']);
