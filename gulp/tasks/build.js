const gulp = require("gulp");
const { clean } = require('./clean');
const { svg } = require('./svg');
const { icons } = require('./icons');
const { styles } = require('./styles');
const { templates } = require('./templates');
const { images } = require('./images');
const { rootfiles } = require('./rootfiles');
const { fonts } = require('./fonts');
const { scripts } = require('./scripts');

exports.build = gulp.series(clean, svg, icons, gulp.parallel(styles, templates, images, rootfiles, fonts, scripts));
