const {src,dest,watch,series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyle() {
  return src('projectUiLib/**/*.scss')
  .pipe(sass())
  .pipe(dest('css'))
}

function watchTask() {
  watch(['projectUiLib/**/*.scss'],buildStyle)
}

exports.default = series(buildStyle,watchTask);