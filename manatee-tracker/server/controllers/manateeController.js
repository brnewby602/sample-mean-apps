var Manatee = require('../models/Manatee.js');

exports.retrieve = function(req, res) {
  Manatee.find(function(err, allManatees) {
    if (err) {
      res.json(err);
    }

    res.json(allManatees);
  }); 
};

exports.createOne = function(req, res) {
   
};

