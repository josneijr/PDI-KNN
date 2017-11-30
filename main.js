// load express
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// set resources dirs
app.use(express.static('public'));
app.use(express.static('static'));

// index page (whenever we enter without a second URL)
app.get('/', function (req, res) {
  res.render('pages/index');
});


// 404 page
app.use(function(req, res, next){
  res.status(500).send('Nothing found');
  //res.render('404', {status: 404});
});

// error page
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  //res.render('500', {status: 500, error: err});
});

// start server, using either the heroku given port or the 3000, for local debugging
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on port ' + listener.address().port);
});