require('..');
var shell = require('shelljs'); // recommended
require('should');

console.error = function () { };

describe('bash-exec', function () {
  it('does not get added to the shelljs instance', function () {
    shell.should.have.property('bashExec');
  });
});
