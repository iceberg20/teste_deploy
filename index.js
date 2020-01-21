var express = require('express');
var app = express();
var path = __dirname + '/views/';

app.get('/', function (req, res) {
  res.sendFile(path + "index.html");
});

app.get('/nodemon', function (req, res) {
  res.send("nodemon 2");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
