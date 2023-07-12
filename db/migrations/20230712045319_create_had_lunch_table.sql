-- migrate:up
CREATE TABLE had_lunch (
	id INT NOT NULL AUTO_INCREMENT,
	date DATE NOT NULL,
	user_id INT,
	food_id INT,
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users (id),
	FOREIGN KEY (food_id) REFERENCES foods (id)
);

-- migrate:down
DROP TABLE had_lunch;
