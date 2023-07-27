-- migrate:up
CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	access_token VARCHAR(255) NOT NULL,
	name VARCHAR(20),
	age INT,
	email VARCHAR(50),
	created_at TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE users;
