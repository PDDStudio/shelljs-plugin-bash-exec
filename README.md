# shelljs-plugin-bash-exec

[![Travis](https://img.shields.io/travis/pddstudio/shelljs-plugin-bash-exec/master.svg?style=flat-square&label=unix)](https://travis-ci.org/pddstudio/shelljs-plugin-bash-exec)
[![npm](https://img.shields.io/npm/v/@pddstudio/shelljs-plugin-bash-exec.svg?style=flat-square)](https://www.npmjs.com/package/@pddstudio/shelljs-plugin-bash-exec)
[![shelljs-plugin](https://img.shields.io/badge/shelljs-plugin-brightgreen.svg?style=flat-square)](https://github.com/shelljs/shelljs/wiki/Using-ShellJS-Plugins) [![Greenkeeper badge](https://badges.greenkeeper.io/PDDStudio/shelljs-plugin-bash-exec.svg)](https://greenkeeper.io/)

A [ShellJS](https://github.com/shelljs/shelljs) plugin to add a `.bashExec()` method.

## Installation

```bash
$ npm install --save shelljs
$ npm install --save shelljs-plugin-bash-exec
```

## Usage

Use this plugin like so:

```
require('shelljs-plugin-bash-exec');
var shell = require('shelljs);

shell.bashExec('command-to-execute');
...

```

## Writing ShellJS plugins

If you're interested in taking a look at the current state of the ShellJS plugin
API, take a look at [index.js](index.js). This has helpful comments explaining
the necessary boilerplate for writing a plugin. For an example usage of the
plugin, take a look at [test/test.js](test/test.js).
