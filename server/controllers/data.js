var csv = require('csvtojson');
var fs = require('fs');
var server = require('../../server.js');
var autoComplete = require('../models/autocomplete').autoComplete;
var index = require('../models/index').index;

exports.importData = function(req, res) {
  var filePath = req.file.path;
  var rowCount = 0;
  var rowsProcessed = 0;
  var percentage = 0;
  var id = req.body.id;
  var io = server.io;

  //get total rows
  var content = fs.readFileSync(filePath, 'utf8');
  rowCount = content.split('\n').length;

  //process csv file
  csv({
    headers:['id', 'name', 'age', 'address', 'team'],
    noheader: true
  }).fromFile(filePath)
    .on('json',(jsonObj)=>{
      autoComplete.addElement(jsonObj.name);
      index.addDoc(jsonObj);
      rowsProcessed++;
      var temp =  Math.round( rowsProcessed/rowCount * 100 );
      if(io && temp!=percentage) {
        percentage = temp;
        io.emit('progress-'+id, {percentage: percentage});
      }
    })
    .on('done',(error)=>{
      res.status(200).send("success");
    })
}
