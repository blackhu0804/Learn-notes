var gulp = require('gulp');

var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');
const image = require('gulp-image');

gulp.task('build:css', function(){
  gulp.src('./src/css/*.css')
    .pipe(concat('index-merge.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('build:js', function(cb){
  pump([
    gulp.src('./src/js/*.js'),
    uglify(),
    gulp.dest('dist/js/')
  ],
  cb
  );
});

gulp.task('build:image', function () {
  gulp.src('./src/img/*')
    .pipe(image())
    .pipe(gulp.dest('dist/img/'));
});

gulp.task('default',['build:css','build:js','build:image']);