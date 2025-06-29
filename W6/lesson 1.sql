-- CREATE TABLE actors (
-- actor_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50) NOT NULL,
-- last_name VARCHAR(150) NOT NULL,
-- birthdate DATE NOT NULL,
-- number_oscars SMALLINT NOT NULL)

-- HOW TO INSERT DATA INTO THE TABLE
-- INSERT INTO actors (first_name, last_name, birthdate, number_oscars)
-- VALUES ('Matt', 'Damon', '06/05/1961', 2)

-- SELECT * FROM actors

-- INSERT INTO actors (first_name, last_name, birthdate, number_oscars)
-- VALUES ('george', 'clooney', '07/02/1970', 4), 
-- ('gal', 'gadot', '30/04/1985', 3);

-- SELECT * FROM actors

-- TYPES OF SELECT QUERIES

-- INSERT INTO actors (first_name, last_name, birthdate, number_oscars)
-- VALUES ('Matt', 'Oleary', '07/02/1921', 3);

-- SELECT first_name, last_name, number_oscars FROM actors WHERE first_name = 'Matt' 
-- AND last_name = 'Damon'

-- LIKE - case sensitive
-- ILIKE - not case sensitive

-- SELECT * FROM actors WHERE last_name LIKE '%mon%';


-- --LIMIT AND OFFSET
-- SELECT * FROM actors LIMIT 3;

-- SELECT * FROM actors OFFSET 1;

-- SELECT * FROM actors WHERE birthdate > '1970-01-01' ORDER BY oscar_number DESC

-- SELECT * 
-- FROM actors
-- WHERE first_name ILIKE '%e%'
-- AND number_oscars > 2
-- ORDER BY last_name DESC
-- LIMIT 4;

-- ALTER TABLE
-- UPDATE actors
-- SET birthdate = '08/10/1970'
-- WHERE 
-- 	last_name = 'Damon';

-- SELECT * FROM actors

-- DELETE FROM actors
-- WHERE first_name = 'Brad' AND last_name = 'Pitt';


