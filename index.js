var plugin = require('shelljs/plugin');
var shell = require('shelljs');

function bashExec(cmd) {
  return shell.exec('bash -l -c "' + cmd + '"');
}

// Try to minimize what this plugin does as much as possible
plugin.register('bashExec', bashExec, {
  allowGlobbing: false,
  wrapOutput: false,
});

exports.bashExec = bashExec;
