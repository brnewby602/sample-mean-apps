var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var manateeRouter = require('./routers/manateeRouter');

// var router = express.Router();

app.use(express.static(__dirname + '/../client'));

/*
app.get('/', function(req, res) {
   res.json({message: 'Manatee API home'});
});
*/

// app.use('/', router);

app.use('/api/manatees', manateeRouter);

app.listen(8675, function() {
   console.log('I\'m Listening for manatee requests');
});