const del = require("del");
const config = require("../config");

function clean() {
  return del([config.dist]);
}

exports.clean = clean;
