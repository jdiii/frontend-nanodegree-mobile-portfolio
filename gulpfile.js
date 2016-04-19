var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var fs = require('fs');
var replace = require('gulp-replace');

var dst = './dst/';
var src = './src/';

gulp.task('copy-all',function(){
    return gulp.src(src + '/**')
        .pipe(gulp.dest(dst)); //copy everything to dst
});

gulp.task('minify-html-root', ['copy-all','minify-css'], function() {
    fs.readFile(dst + 'css/style.css', function(err, data){
        return gulp.src(src + '*.html')
            .pipe(replace('<link href="css/style.css" rel="stylesheet" media="all">', '<style>' + data + '</style>')) //insert css from style.css into a style tag
            .pipe(htmlmin({collapseWhitespace: true})) //get rid of whitespace
            .pipe(gulp.dest(dst));
    });
});

gulp.task('minify-html-views', ['copy-all'], function() {
  return gulp.src(src + 'views/' + '*.html')
    .pipe(htmlmin({collapseWhitespace: true})) //get rid of whitespace in views, just for fun
    .pipe(gulp.dest(dst));
});

gulp.task('minify-css', ['copy-all'], function () {
    return gulp.src(src + 'css/*.css')
    .pipe(minifyCss())  //minify css
    .pipe(gulp.dest(dst + 'css/'));
});

gulp.task('compress-js', ['copy-all'], function() {
  return gulp.src(src + '/js/*.js')
    .pipe(uglify()) //minify javascript
    .pipe(gulp.dest(dst + 'js/'));
});

gulp.task('compress-imgs', ['copy-all'], function() {
	return gulp.src(src + '/img/*')
		.pipe(imagemin({})) //minimize images
		.pipe(gulp.dest(dst + 'img/'));
});

gulp.task('default', ['copy-all','minify-html-root','minify-html-views','compress-imgs','compress-js','minify-css']);
