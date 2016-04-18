exports['xml transform sample1'] = function(test) {
  var Transformer = require("../lib/assignment.js");
  var transformer = new Transformer();
  var result = transformer.processXml('test/sample1.xml');
  test.equals('<document><item><name>B</name><score>0.5</score></item>' +
              '<item><name>A</name><score>0.8</score></item></document>', result);
  test.done();
}

exports['xml transform sample2'] = function(test) {
  var Transformer = require("../lib/assignment.js");
  var transformer = new Transformer();
  var result = transformer.processXml('test/sample2.xml');
  test.equals('<document><item><name>B</name><score>0.1</score></item>' +
              '<item><name>A</name><score>0.2</score></item>' +
              '<item><name>D</name><score>0.6</score></item>' +
              '<item><name>C</name><score>0.9</score></item></document>', result);
  test.done();
}
