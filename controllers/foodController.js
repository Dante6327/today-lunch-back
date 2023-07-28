const foodService = require('../services/foodService');

const foodData = async (req, res) => {
  try {
    const foodData = await foodService.searchFood();
    console.log('controller', foodData);

    return res.status(201).json({
      message: 'Random food search complete!',
      data: foodData,
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  foodData,
};
