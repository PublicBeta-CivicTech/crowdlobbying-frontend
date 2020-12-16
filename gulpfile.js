const { build } = require('./gulp/tasks/build');
const { clean } = require('./gulp/tasks/clean');
const { defaultTask } = require('./gulp/tasks/default');
const { rev, revreplace } = require('./gulp/tasks/rev');
const { svg } = require('./gulp/tasks/svg');

exports.build = build;
exports.clean = clean;
exports.default = defaultTask;
exports.rev = rev;
exports.revreplace = revreplace;
exports.svg = svg;
