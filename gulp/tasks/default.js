const gulp = require("gulp");
const process = require("process");

const { build } = require('./build');
const { browserSync, browserSyncReload } = require('./browserSync');
const { watch } = require('./watch');

function defaultTask(cb) {
  process.WATCH_SCRIPTS = true;
  //gulp.series(build, browserSync, watch)();
  gulp.parallel(build, browserSync, browserSyncReload, watch)();

  cb();
}

exports.defaultTask = defaultTask;
