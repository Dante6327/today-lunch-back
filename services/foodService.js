const foodDao = require('../models/foodDao');

const searchList = async () => {
  const createFood = await foodDao.searchFoodList();
  return createFood;
};

module.exports = {
  searchList,
};
