'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();

app.set('views', 'views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('home', {
  });
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

module.exports.getApp = app;