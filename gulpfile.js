
const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps=require('gulp-sourcemaps')
const concat=require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-minify-css');
var postcss = require('gulp-postcss');
var pxtoviewport = require('postcss-px-to-viewport-8-plugin');

gulp.task('desktope', function () {
  gulp.series('less',)
  var processors = [
      pxtoviewport({
          viewportWidth: 1440,
          viewportUnit: 'vw',
          unitPrecision: 5,
      })
  ];

  return gulp.src(['./src/less/desktope/*.less', '!./src/less/desktope/main.less'])
      .pipe(less())
      .pipe(postcss(processors))
      .pipe(concat("style.desktope.min.less"))
      .pipe(gulp.dest('./src/less/'));
});
gulp.task('less', function () {
  return gulp.src(`./src/less/style.less`)
    .pipe(less())
    .pipe(autoprefixer({
      overrideBrowserslist:  ['last 2 versions'],
      cascade: false
  }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./src/css'));
});
gulp.task('watch', function () {
  gulp.watch('./src/less/desktope/*.less', gulp.series('desktope',));
  gulp.watch('./src/less/*.less', gulp.series('less',));
});

gulp.task('default', gulp.series('desktope', 'less', 'watch'));

