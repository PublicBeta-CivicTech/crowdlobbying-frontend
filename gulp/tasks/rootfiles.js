const gulp = require("gulp");
const config = require("../config").rootfiles;

function rootfiles() {
  return gulp
    .src(config.src, {
      dot: true,
    })
    .pipe(gulp.dest(config.dist));
}

exports.rootfiles = rootfiles;
