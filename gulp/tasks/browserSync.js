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
