'use strict';

var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();

app.set('views', 'views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('home', {
  });
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

module.exports.getApp = app;