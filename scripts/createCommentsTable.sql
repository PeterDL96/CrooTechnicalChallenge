USE `croo_challenge_db`;

SET NAMES utf8;
SET character_set_client = utf8mb4;

CREATE TABLE `comments` (
	`comment_id` int(11) NOT NULL,
    `user_name` varchar(50) NOT NULL,
    `email` varchar(50) NOT NULL,
    `avatar` varchar(50) NOT NULL,
    `create_date` date NOT NULL,
    `comment` varchar(500) NOT NULL,
    PRIMARY KEY (`comment_id`)
) ENGINE InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;