const config = require("../config").browserSync;
const browserSync = require("browser-sync");

function browserSyncTask() {
  return browserSync(config);
}

function browserSyncReloadTask() {
  return browserSync.reload();
}

exports.browserSync = browserSyncTask;
exports.browserSyncReload = browserSyncReloadTask;

// gulp.task("browserSync", () => {
//   browserSync(config);
// });
//
// gulp.task("browserSync-reload", () => {
//   browserSync.reload();
// });
