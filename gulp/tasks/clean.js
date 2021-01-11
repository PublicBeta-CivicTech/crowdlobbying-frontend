const gulp = require('gulp');
const del = require("del");
const config = require("../config");
const { cacheClear } = require('./cacheClear');

function clean(cb) {
  gulp.series(cacheClear)(cb);

  return del([config.dist]);
}

exports.clean = clean;
