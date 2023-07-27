const express = require('express');
const foodController = require('../controllers/foodController');
const APIController = require('../controllers/APIController');
const router = express.Router();

router.get('/list', foodController.foodList);
router.get('/nutrients/:foodname', APIController.nutrients);

module.exports = {
  router,
};
