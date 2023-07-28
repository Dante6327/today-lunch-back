const express = require('express');
const foodController = require('../controllers/foodController');
const router = express.Router();

router.get('/random-food', foodController.foodData);

module.exports = {
  router,
};
