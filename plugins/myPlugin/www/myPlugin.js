var exec = require('cordova/exec');

var PluginName3 = function() {};

PluginName3.prototype.test = function() {
  cordova.exec(null, null, "PluginName2", "test", null);
};

module.exports = new PluginName3();
