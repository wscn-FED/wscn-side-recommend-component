var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var runSequence = require('run-sequence');
var inject = require('gulp-inject');
var rev = require('gulp-rev');
var rename = require('gulp-rename');

var DEPENDENCY = [
  './node_modules/react/dist/react.min.js',
  './node_modules/react-dom/dist/react-dom.min.js',
  './node_modules/axios/dist/axios.min.js'
];

gulp.task('clean', function(){
  return del([
    './build'
  ])
});

gulp.task('concat', function() {
    gulp.src(DEPENDENCY)
        .pipe(concat('react-vendor.min.js'))
        .pipe(rev())
        .pipe(gulp.dest('./build/vendor'));
});

gulp.task('inject', function() {
  var target = gulp.src('./index.pro.html');
  var sources = gulp.src(['./build/vendor/**/*.js', './build/**/*.js', './build/**/*.css'], {read: false});
  return target.pipe(inject(sources, {
      ignorePath: '/build/'
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./build'))
});


gulp.task('vendor', function(cb) {
  runSequence(
    'clean',
    'concat',
    cb
  )
});
