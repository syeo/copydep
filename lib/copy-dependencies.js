/*
 * inject-dependencies.js
 * https://github.com/stephenplusplus/wiredep
 *
 * Copyright (c) 2013 Stephen Sawchuk
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');

var globalDependenciesSorted;
var ignorePath;
var target;

/**
 * Injects dependencies into the specified HTML file.
 *
 * @param  {object} config  the global configuration object.
 * @return {object} config
 */
module.exports = function inject(config) {
  globalDependenciesSorted = config.get('global-dependencies-sorted');
  ignorePath = config.get('ignore-path');
  target = config.get('target');

  var target = config.get('target');
  console.dir("yay");
  console.dir(config);
  console.dir("yay");

  // grab the html file and its contents, then drop our scripts in.
  // fs.writeFileSync(htmlFile, html.replace(regex.bower, injectScripts));

  return config;
};
