var express = require('express');
var app = express();

var manateeRouter = require('./routers/manateeRouter');

var router = express.Router();

app.get('/', function(req, res) {
   res.json({message: 'Manatee API home'});
});

app.use('/', router);

app.listen(8675, function() {
   console.log('I\'m Listening for manatee requests');
});