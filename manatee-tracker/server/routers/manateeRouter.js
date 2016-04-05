var manateeRouter = require('express').Router();
var manateeController = require('../controllers/manateeController.js');

manateeRouter.route('/').get(manateeController.retrieve);

module.exports = manateeRouter;
