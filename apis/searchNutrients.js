const axios = require('axios');

const searchNutrients = async (foodname) => {
  async function searchFoodsUsingAPI(foodname) {
    const response = await axios
      .get(process.env.NUTRIENTS_API_URL, {
        params: {
          serviceKey: process.env.NUTRIENTS_API_KEY,
          bgn_year: '2017',
          type: 'json',
          numOfRows: 100,
          desc_kor: foodname,
        },
      })
      .catch((err) => console.log('에러'));
    return response.data;
  }

  function extractNutrients(foodInfo) {
    const completeExtractNutrientData = [];

    NUTRIENTS_LIST.map((nutrient) =>
      completeExtractNutrientData.push({
        nutrient: Object.values(nutrient)[0],
        value: foodInfo
          ? foodInfo[Object.keys(nutrient)[0]] === 'N/A'
            ? '0'
            : foodInfo[Object.keys(nutrient)[0]]
          : '0',
      })
    );

    return completeExtractNutrientData;
  }

  try {
    const nutrients = await searchFoodsUsingAPI(foodname);
    let result = [];

    if (nutrients.body.items) {
      const filteredFoodData = nutrients.body.items.filter(
        (food) => food.DESC_KOR === foodname
      );
      result = extractNutrients(
        filteredFoodData.length > 0
          ? filteredFoodData[0]
          : nutrients.body.items[0]
      );
    } else {
      result = extractNutrients();
    }

    return result;
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  searchNutrients,
};

const NUTRIENTS_LIST = [
  { SERVING_WT: '1회 제공량(g)' },
  { NUTR_CONT1: '열량(kcal)' },
  { NUTR_CONT2: '탄수화물(g)' },
  { NUTR_CONT3: '단백질(g)' },
  { NUTR_CONT4: '지방(g)' },
  { NUTR_CONT5: '당류(g)' },
  { NUTR_CONT6: '나트륨(mg)' },
  { NUTR_CONT7: '콜레스테롤(mg)' },
  { NUTR_CONT8: '트랜스지방(g)' },
];
