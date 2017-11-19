var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var multer  = require('multer')
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var home = require('./server/controllers/home');
var search = require('./server/controllers/search');
var data = require('./server/controllers/data');
var upload = multer({ dest: 'uploads/' });
var compiler = webpack(webpackConfig);

//compile client side code
compiler.run(function(err, stats) {
  if(err) {
    console.log(err);
  }
});

//init app & server
var app = express();
var server = http.createServer(app);
app.set('port', 8079);
app.use(express.static('client'));
app.use(bodyParser.json());
server.listen(app.get('port'));

//init socket
var io = require('socket.io').listen(server);
var sockets = [];
io.on('connection', function(socket){
  sockets.push(socket);
});

//init routes
app.get("/", home.home);
app.post("/import", upload.single('data'), data.importData);
app.post("/search", search.search);
app.post("/suggestion", search.suggestion);

exports.server = server;
exports.io = io;
