var Manatee = require('../models/Manatee.js');
var data = require('../data/sampleManateeData');

exports.retrieve = function(req, res) {
  console.log('IM IN retrieve');

  Manatee.find(function(err, allManatees) {
    if (err) {
      res.json(err);
    }

    res.json(allManatees);
  }); 
};      

exports.retrieveOne = function(req, res) {
  console.log('IM IN retrieveOne:' + req.params.name);
  var query = {name: req.params.name};

  Manatee.findOne(query, function(err, matchingManatee) {
    if (err) {
      res.json(err);
    }
  
    res.json(matchingManatee);
    
  });
};

exports.createOne = function(req, res) {

  debugger;
  var newManatee = req.body;
  console.log('IM IN createOne:' + req.body);


  Manatee.create(newManatee, function(err, newManatee) {
    if (err) {
      return res.json(err);
    }

    res.json(newManatee);

  });


};

