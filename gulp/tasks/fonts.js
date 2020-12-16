const gulp = require("gulp");
const config = require("../config").fonts;

function fonts() {
  return gulp.src(config.src).pipe(gulp.dest(config.dist));
}

exports.fonts = fonts;
