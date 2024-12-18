var fs = require('fs');
var xmldom = require('xmldom');
var xpath = require('xpath');

function Transformer() {

  this.processXml = function(path) {
    var DOMParser = xmldom.DOMParser;
    var XMLSerializer = xmldom.XMLSerializer;
    var xml = fs.readFileSync(path, 'utf-8');
    
    // Parse the XML into a document
    var doc = new DOMParser().parseFromString(xml, 'text/xml');
    
    // Use XPath to get all <item> nodes
    var items = xpath.select('//item', doc);
    
    // Sort the items by the score (ascending order)
    items.sort(function(a, b) {
      var scoreA = parseFloat(xpath.select('string(score)', a));
      var scoreB = parseFloat(xpath.select('string(score)', b));
      return scoreA - scoreB;
    });
    
    // Append the sorted items back to the document
    var documentElement = doc.documentElement;
    documentElement.removeChild(documentElement.firstChild); // Remove the old <item> nodes
    items.forEach(function(item) {
      documentElement.appendChild(item); // Re-add sorted <item> nodes
    });

    // Serialize the document back to XML string
    var serializer = new XMLSerializer();
    var result = serializer.serializeToString(doc);
    
    // Normalize the result to remove extra spaces, line breaks, and indentation
    result = result.replace(/>\s+</g, '><'); // Remove spaces between tags
    result = result.replace(/\r?\n|\r/g, ''); // Remove all newlines

    return result;
  };

}

module.exports = Transformer;
