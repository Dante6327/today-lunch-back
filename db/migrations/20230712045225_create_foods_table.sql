-- migrate:up
CREATE TABLE foods (
	id INT NOT NULL AUTO_INCREMENT,
	food_category VARCHAR(100),
	food_name VARCHAR(100),
	image VARCHAR (1000),
	calorie DECIMAL comment 'kcal',
	PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE foods;