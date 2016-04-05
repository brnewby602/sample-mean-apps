var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var manateeRouter = require('./routers/manateeRouter');

var port = process.env.PORT || 8675;
var dbUri = process.env.MONGOLAB_URI || 'mongodb://localhost/manatees';
mongoose.connect(dbUri);

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client'));
app.use('/api/manatees', manateeRouter);

app.listen(port, function() {
   console.log('I\'m Listening for manatee requests');
});