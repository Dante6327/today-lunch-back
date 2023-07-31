-- migrate:up
CREATE TABLE foods (
	id INT NOT NULL AUTO_INCREMENT,
	food_name VARCHAR(100),
	contents VARCHAR(200),
	PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE foods;