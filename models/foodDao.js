const { DataSource } = require('typeorm');

const myDataSource = new DataSource({
  type: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

myDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error occurred during Data Source initialization', err);
    myDataSource.destroy();
  });

const searchFoodInfo = async () => {
  try {
    const result = await myDataSource.query(
      `SELECT * FROM foods ORDER BY RAND() LIMIT 1;
		`
    );

    return result;
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT');
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  searchFoodInfo,
};
