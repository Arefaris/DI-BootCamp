-- SELECT * FROM language

-- SELECT film.title, film.description, language.name
-- FROM film
-- LEFT JOIN language ON film.language_id = language.language_id

-- SELECT film.title, film.description, language.name
-- FROM language
-- LEFT JOIN film ON language.language_id = film.language_id;


-- CREATE TABLE new_film (
-- id SERIAL PRIMARY KEY,
-- name VARCHAR(50)
-- );

-- INSERT INTO new_film(name)
-- VALUES('Harry Potter'), ('Dragonball');

-- CREATE TABLE customer_review (
-- review_id SERIAL PRIMARY KEY,
-- film_id INTEGER NOT NULL,
-- language_id INTEGER NOT NULL,
-- title VARCHAR(50),
-- score INTEGER,
-- review_text TEXT,
-- last_update VARCHAR(50),
-- FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
-- FOREIGN KEY (language_id) REFERENCES language(language_id)
-- )

-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES (
--     1,                            
--     1,                        
--     'Great Movie!',
--     9,
--     'Amazing Movie'
-- );

-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES (
--     2,                            
--     1,                        
--     'Great Movie!',
--     10,
--     'super'
-- );

-- SELECT * FROM customer_review;

-- DELETE FROM new_film
-- WHERE id = 1;

-- the review is deleted because we set on delete cascade constraint


--EX2
-- UPDATE film
-- SET language_id = 2
-- WHERE title = 'Chamber Italian';

-- film_id and language_id, they must exist so we could insert 

-- DROP TABLE customer_review;
-- its an easy step since no other tables reference customer_review via foreign keys

-- SELECT COUNT(*)
-- FROM rental
-- WHERE return_date IS NULL;


-- SELECT
--     film.title,
--     film.rental_rate,
--     rental.rental_date
-- FROM rental
-- JOIN inventory ON rental.inventory_id = inventory.inventory_id
-- JOIN film ON inventory.film_id = film.film_id
-- WHERE rental.return_date IS NULL
-- ORDER BY film.rental_rate DESC
-- LIMIT 30;

-- 1 Penelope Monroe
-- SELECT DISTINCT f.title, f.description
-- FROM film f
-- JOIN film_actor fa ON f.film_id = fa.film_id
-- JOIN actor a ON fa.actor_id = a.actor_id
-- WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe'
-- AND f.description ILIKE '%sumo%';

-- 2
-- SELECT title, description, length, rating
-- FROM film
-- WHERE rating = 'R' AND length < 60;


-- 3
-- SELECT DISTINCT f.title, p.amount, r.return_date
-- FROM customer c
-- JOIN rental r ON c.customer_id = r.customer_id
-- JOIN payment p ON r.rental_id = p.rental_id
-- JOIN inventory i ON r.inventory_id = i.inventory_id
-- JOIN film f ON i.film_id = f.film_id
-- WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
--   AND p.amount > 4.00
--   AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- 4
-- SELECT DISTINCT f.title, f.description, f.replacement_cost
-- FROM customer c
-- JOIN rental r ON c.customer_id = r.customer_id
-- JOIN inventory i ON r.inventory_id = i.inventory_id
-- JOIN film f ON i.film_id = f.film_id
-- WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
--   AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
-- ORDER BY f.replacement_cost DESC
-- LIMIT 1;




