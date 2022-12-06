This document will help you setup the project. Please follow the steps carefully. 


Section 1: Creating Database
First create a local MySQL database and then create schema called 'realtor'
Use below commands to create 4 tables.

1. users table

CREATE TABLE `users` (
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `test` json DEFAULT NULL,
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


2. listings table

CREATE TABLE `listings` (
  `listing_id` int NOT NULL AUTO_INCREMENT,
  `listing_name` varchar(255) DEFAULT NULL,
  `listing_price` int DEFAULT NULL,
  `listing_description` longtext,
  `listing_number_of_beds` int DEFAULT NULL,
  `listing_number_of_baths` int DEFAULT NULL,
  `listing_status` int DEFAULT NULL,
  `listing_date` date DEFAULT NULL,
  PRIMARY KEY (`listing_id`),
  UNIQUE KEY `listings_id_UNIQUE` (`listing_id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


3. address table

CREATE TABLE `address` (
  `address_id` int NOT NULL AUTO_INCREMENT,
  `listing_state` varchar(255) DEFAULT NULL,
  `listing_city` varchar(45) DEFAULT NULL,
  `listing_street` varchar(45) DEFAULT NULL,
  `listing_zipcode` int DEFAULT NULL,
  `listing_lat` float DEFAULT NULL,
  `listing_lng` float DEFAULT NULL,
  `listing_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1007 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


4. images

CREATE TABLE `images` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `listing_mimetype` varchar(45) DEFAULT NULL,
  `listing_filename` varchar(45) DEFAULT NULL,
  `listing_id` int DEFAULT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


After tables are created, navigate to database.js in server folder and make sure to change password and user 
which you used to create for database. All information should match to make the project run.



Section 2: API Keys
This project uses multiple API keys, make sure you get your own API keys and put them in .env file in client and server folder.

1. Client Folder .env
	1.1 REACT_APP_CALENDLY_URL="This would take Calendly API"
	1.2 REACT_APP_API_BASE_URL="http://localhost:3200"
	1.3 REACT_APP_GOOGLE_MAPS_API_KEY="This would use API keys for Google Places, Google Maps, Google Geocoding"

2. Server Folder .env
	2.1 EMAIL_ACCESS_KEY = 'This is email service API key'
	2.2 EMAIL_API_KEY = 'This is also an email service key'
	2.3 RECAPTCHA_SITE_KEY = 'This is recaptcha site key'
	2.4 RECAPTCHA_SECRET_KEY = 'THis is recaptcha sercret key'

Note: All API should be your own and project would run error free only if correct keys are used. Variables names must match. 


Section 3: Running a project
Once client and server folder are downloaded locally and both of the above section are completed, project will run using steps below

Frontend:
	Step 1: Open Terminal and navigate to client folder using 'cd client'. Make sure you are in project directory.
	Step 2: Enter command 'npm install'. It will download all the required packages. 
	Step 3:(Optional) use this command if step 2 doesnt work. 'npm install --legacy-peer-deps'
	Step 4: After installation is completed. Use this command to run the project 'npm start'
These 4 steps will run your client side.

Backend:
	Step 1: Open Terminal and navigate to server folder using 'cd client'. Make sure you are in project directory.
	Step 2: Enter command 'npm install'. It will download all the required packages. 
	Step 3: After installation is completed. Use this command to run the project 'npm start'
These 3 steps will run your client side.


After successfully following above steps, your project should be running.
Enjoy!











