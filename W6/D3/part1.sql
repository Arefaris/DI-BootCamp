-- CREATE TABLE colors (
--     color_id SERIAL PRIMARY KEY,
--     name VARCHAR(50)
-- );

-- INSERT INTO colors (name) VALUES ('blue'), ('yellow'), ('pink');

-- SELECT * FROM colors


-- OPTIONS ONWHAT HAPPENS IF I DELETE A ROW ON THE PARENT TABLE

-- ON DELETE RESTRICT

-- CREATE TABLE cars_restrict (
--     car_id SERIAL PRIMARY KEY,
--     car_name VARCHAR(100),
--     car_color INTEGER REFERENCES colors (color_id) ON DELETE RESTRICT
-- );

-- INSERT INTO cars_restrict (car_name, car_color) VALUES ('Toyota', 1), ('Ford', 2), ('Honda', 3);

-- SELECT * FROM cars_restrict

-- DELETE FROM colors WHERE name = 'blue' --> gives an error


-- ON DELETE CASCADE: allows you to delete a parent record but its corresponding child record will be deleted as well

-- CREATE TABLE cars_cascade (
--     car_id SERIAL PRIMARY KEY,
--     car_name VARCHAR(100),
--     car_color INTEGER REFERENCES colors (color_id) ON DELETE CASCADE
-- )


-- INSERT INTO cars_cascade (car_name, car_color) VALUES ('Toyota', 1), ('Ford', 2), ('Honda', 3);
-- DELETE FROM colors WHERE name = 'blue';
-- SELECT * FROM  cars_cascade

-- OTHER OPTIONS:
-- - NO ACTION
-- - SET NULL
-- - SET DEFAULT

-- - 1 - Create a table called cars_set_default. 
-- It will have three columns: car_id (the primary key), car_name and car_color (CAR COLOR WILL BE SET DEFAULT):

-- - 2 - create a delete statement to delete from the colors table one color id. 
-- - 3 - select * from cars_set_default and analyse. What happened?

-- CREATE TABLE cars_set_default(
-- car_id SERIAL PRIMARY KEY,
-- car_name VARCHAR(100),
-- car_color INTEGER REFERENCES colors (color_id) ON DELETE SET DEFAULT
-- )

-- INSERT INTO cars_set_default (car_name, car_color) VALUES ('Toyota', 1), ('Ford', 2), ('Honda', 3);
-- DELETE FROM colors WHERE name = 'blue';
-- SELECT * FROM cars_set_default