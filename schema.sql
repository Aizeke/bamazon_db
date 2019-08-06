CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(250),
    department_name VARCHAR(250),
    price DECIMAL(10 , 2 ),
    stock_quantity INT,
    PRIMARY KEY (item_id)
);