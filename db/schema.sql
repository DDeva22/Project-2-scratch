DROP DATABASE IF EXISTS base;

CREATE DATABASE base;
USE base;

CREATE TABLE userBase (
	id INT AUTO_INCREMENT,
    legal_name VARCHAR(50),
    user_name VARCHAR(20),
    user_password VARCHAR(20),
    user_ID VARCHAR(30),
    
    PRIMARY KEY (id)
);


CREATE TABLE trip(
	trip_id INT AUTO_INCREMENT,
    user_ID VARCHAR(30),
    user_priviledge BOOLEAN,
    trip_name VARCHAR(20),
    budget_total DECIMAL(9,2),
    shared_category_1 VARCHAR(20),
    shared_category_2 VARCHAR(20),
    shared_category_3 VARCHAR(20),
    shared_category_4 VARCHAR(20),
    shared_category_5 VARCHAR(20),
    shared_category_6 VARCHAR(20),
    
	PRIMARY KEY (trip_id)
);


CREATE TABLE personallist(
trip_id INT,
user_ID VARCHAR(30),
user_ID VARCHAR(30),
personal_budget DECIMAL(7,2),
personal_category_1 VARCHAR(20),
personal_category_2 VARCHAR(20),
personal_category_3 VARCHAR(20),
personal_category_4 VARCHAR(20),
personal_category_5 VARCHAR(20),
personal_category_6 VARCHAR(20)


);

