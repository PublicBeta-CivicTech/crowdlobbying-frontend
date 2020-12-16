const gulp = require("gulp");
const config = require("../config");
const watch = require("gulp-watch");

const { styles } = require('./styles');
const { images } = require('./images');
const { browserSyncReload } = require('./browserSync');
const { icons } = require('./icons');
const { templates } = require('./templates');
const { fonts } = require('./fonts');
const { cacheClear } = require('./cacheClear');

function watchTask(cb) {
  watch(config.styles.files_src, "./src/assets", gulp.series(styles));
  watch(config.images.files_src, gulp.series(images, browserSyncReload));
  watch(config.icons.src_files, gulp.series(icons, templates, browserSyncReload));
  watch(config.templates.files_src, gulp.series(cacheClear, templates, browserSyncReload));
  watch(config.fonts.src, gulp.series(fonts, browserSyncReload));

  cb();
}

exports.watch = watchTask;
