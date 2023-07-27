const foodService = require('../services/foodService');

const foodList = async (req, res) => {
  try {
    const data = await foodService.searchList();
    console.log(data);
    return res.status(201).json({
      message: 'SIGNUP_SUCCESS',
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  foodList,
};
