const cache = require('gulp-cache');

function cacheClear(cb) {
  cache.clearAll();

  cb();
}

exports.cacheClear = cacheClear;
