const gulp = require("gulp");
const runSequence = require('gulp4-run-sequence');

gulp.task("build", callback => {
  runSequence(
    "clean",
    "svg",
    "icons",
    ["styles", "templates", "images", "rootfiles", "fonts", "scripts"],
    callback
  );
});
