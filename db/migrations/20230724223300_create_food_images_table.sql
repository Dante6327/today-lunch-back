-- migrate:up
CREATE TABLE food_images (
	id INT NOT NULL AUTO_INCREMENT,
	images JSON,
    food_id INT,
	PRIMARY KEY (id),
	FOREIGN KEY (food_id) REFERENCES foods (id)
);

-- migrate:down
DROP TABLE food_images;
