var fs = require('fs');
var xmldom = require('xmldom');
var xpath = require('xpath');

function Transformer() {

  this.processXml = function(path) {
    var DOMParser = xmldom.DOMParser;
    var xml = fs.readFileSync(path, 'utf-8');
    var doc = new DOMParser().parseFromString(xml);
    var result = doc.toString();
    return result;
  }

}

module.exports = Transformer;
