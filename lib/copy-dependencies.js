/*
 * inject-dependencies.js
 * https://github.com/stephenplusplus/wiredep
 *
 * Copyright (c) 2013 Stephen Sawchuk
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

var directory;
var target;


var copyFile = function(fromPath) {
  var toPath = fromPath.replace(/\\/g, '/').replace(directory, target);
  var dirPath = path.dirname(toPath);
  mkdirp.sync(dirPath);
  var content = fs.readFileSync(fromPath);
  fs.writeFileSync(toPath, content);
};

var copyFiles = function(paths) {
  paths.forEach(copyFile);
};

module.exports = function inject(config) {
  var globalDependenciesSorted = config.get('global-dependencies-sorted');
  directory = config.get('directory');
  target = config.get('target');
  ['js', 'css', 'scss'].forEach(function(type) {
    copyFiles(globalDependenciesSorted[type]);
  });
  return config;
};
