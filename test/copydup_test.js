'use strict';

var copydep = require('../bin/copydep');
var fs = require('fs');
var bowerJson = JSON.parse(fs.readFileSync('.tmp/bower.json'));

exports['copydep'] = {
  copy: function(test) {
    var ret = copydep({
      directory: '.tmp/bower_components',
      target: '.tmp/target',
      bowerJson: bowerJson
    });

    var globalDependenciesSorted = ret.get('global-dependencies-sorted');
    ['js', 'css', 'scss'].forEach(function(type) {
      globalDependenciesSorted[type].forEach(function(fromPath) {
        var toPath = fromPath.replace(/\\/g, '/').replace(ret.get('directory'), ret.get('target'));
        test.equals(fs.existsSync(toPath), true);
      });
    });

    test.done();
  }
};
