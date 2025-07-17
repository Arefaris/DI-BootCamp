-- CREATE TABLE item (
-- item_id SERIAL PRIMARY KEY,
-- item_type VARCHAR(50) NOT NULL,
-- item_price SMALLINT NOT NULL
-- )

-- CREATE TABLE customers (
-- customer_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50) NOT NULL,
-- last_name VARCHAR(150) NOT NULL
-- )

-- INSERT INTO item(item_type, item_price)
-- VALUES('Small Desk', 100), ('Large desk', 300), ('Fan', 80);

-- INSERT INTO customers(first_name, last_name)
-- VALUES('Greg', 'Jones'), ('Sandra', 'Jones'), ('Scott', 'Scott'), ('Trevor', 'Green'), ('Melanie', 'Johnson');

-- SELECT * FROM customers

-- SELECT * FROM item
-- WHERE item_price > 80

-- SELECT * FROM item
-- WHERE item_price <= 300

-- SELECT * FROM customers
-- WHERE last_name = 'Smith' 
-- outcome is empty table, no customers with last name smith

-- SELECT * FROM customers
-- WHERE last_name = 'Jones' 

-- SELECT * FROM customers
-- WHERE first_name != 'Scott' 