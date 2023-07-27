-- migrate:up
CREATE TABLE foods (
	id INT NOT NULL AUTO_INCREMENT,
	food_category VARCHAR(100),
	food_name VARCHAR(100),
	fodd_cd VARCHAR(20),
	serving_size INT,
	calorie DECIMAL,
	carbohydrate DECIMAL,
	protein DECIMAL,
	fat DECIMAL,
	sugars DECIMAL,
	sodium DECIMAL,
	cholesterol DECIMAL,
	fatty_acid DECIMAL,
	trans_fat DECIMAL,
	PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE foods;