var manateeRouter = require('express').Router();
var manateeController = require('../controllers/manateeController.js');

manateeRouter.route('/').get(manateeController.retrieve);

manateeRouter.route('/:name').get(manateeController.retrieveOne);
manateeRouter.route('/').post(manateeController.createOne);


module.exports = manateeRouter;
