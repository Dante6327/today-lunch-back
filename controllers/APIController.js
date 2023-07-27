const axios = require('axios');

const nutrients = async (req, res) => {
  try {
    // 영양정보 DB API 호출하여 식품 데이터 가져오기
    const response = await axios
      .get(process.env.NUTRIENTS_API_URL, {
        params: {
          serviceKey: process.env.NUTRIENTS_API_KEY,
          bgn_year: '2017',
          type: 'json',
          desc_kor: req.params.foodname,
        },
      })
      .catch((err) => console.log('에러'));
    console.log('data', response.data);

    return res.status(201).json({
      message: response.data,
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  nutrients,
};
