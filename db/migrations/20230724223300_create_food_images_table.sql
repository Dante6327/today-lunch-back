-- migrate:up
CREATE TABLE food_images (
	id INT NOT NULL AUTO_INCREMENT,
	image VARCHAR(1000),
    food_id INT,
	PRIMARY KEY (id),
	FOREIGN KEY (food_id) REFERENCES foods (id)
);

-- migrate:down
DROP TABLE food_images;
