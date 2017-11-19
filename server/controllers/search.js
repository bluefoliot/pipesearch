var autoComplete = require('../models/autocomplete').autoComplete;
var index = require('../models/index').index;

exports.search = function(req, res) {
  var query = req.body.query;
  var response = [];
  if(query) {
    var result = index.search(query);
    result.forEach(function(data) {
      var doc = index.documentStore.getDoc(data.ref);
      response.push(doc);
    })
  }
  res.status(200).send(response);
}

exports.suggestion = function(req, res) {
  var query = req.body.query;
  var matches = autoComplete.search(query);
  if(matches.length>20) {
    matches = matches.slice(0, 20);
  }
  res.status(200).send(matches);
}
