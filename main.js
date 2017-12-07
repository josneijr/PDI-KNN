// load express
var express = require('express');
var favicon = require('serve-favicon')
var path = require('path')
var app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// set resources dirs
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/static/css'));
app.use(express.static(__dirname + '/static/js'));

// index page (whenever we enter without a second URL)
app.get('/', function (req, res) {
  res.render('index');
});

// image database
app.get('/database', function (req, res) {
  res.render('database');
});

// start server, using either the heroku given port or the 3000, for local debugging
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on port ' + listener.address().port);
});