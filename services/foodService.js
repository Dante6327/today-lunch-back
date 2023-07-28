const foodDao = require('../models/foodDao');
const { searchNutrients } = require('../apis/searchNutrients');

const searchFood = async () => {
  const foodName = await foodDao.searchFoodInfo();
  const nutrients = await searchNutrients(foodName[0].food_name);
  const foodData = {
    id: foodName[0].id,
    foodName: foodName[0].food_name,
    nutrients: nutrients,
  };

  return foodData;
};

module.exports = {
  searchFood,
};
