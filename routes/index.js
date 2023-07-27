const express = require('express');
const router = express.Router();

const foodRouter = require('./foodRouter');
router.use('/foods', foodRouter.router);

module.exports = router;
