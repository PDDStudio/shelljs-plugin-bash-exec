var plugin = require('shelljs/plugin');
var shell = require('shelljs');

function bashExec(cmd) {
  return shell.exec('bash -l -c "' + cmd + '"');
}

plugin.register('bashExec', bashExec, {
  allowGlobbing: false,
  wrapOutput: true,
});

exports.bashExec = bashExec;
