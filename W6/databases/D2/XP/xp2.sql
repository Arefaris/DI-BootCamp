--xp1

-- SELECT * FROM item ORDER BY item_price ASC
-- SELECT * FROM item WHERE item_price >= 80 ORDER BY item_price DESC
-- SELECT first_name, last_name from customers  ORDER BY first_name ASC LIMIT 3
-- SELECT last_name from customers ORDER BY last_name DESC

-- xp2

--1  SELECT * FROM customer
--2 SELECT CONCAT(first_name, ' ', last_name) AS full_name 
--3 SELECT DISTINCT create_date from customer

--4 SELECT * FROM customer ORDER BY first_name DESC
--5 SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC

--6 SELECT address, phone FROM address
--6 WHERE district = 'Texas'

--7 SELECT * FROM film
--7 WHERE film_id = '15'
--7 OR film_id = '150'

--8 SELECT film_id, title, description, length, rental_rate 
--8 FROM film
--8 WHERE title = 'Airport Pollock'

--9 SELECT film_id, title, description, length, rental_rate 
--9 FROM film
--9 WHERE title ILIKE '%ha%'

--10 SELECT film_id, title, description, replacement_cost from film ORDER BY replacement_cost ASC
--10 LIMIT 10

--11 SELECT * FROM film
--11 ORDER BY replacement_cost ASC
--11 LIMIT 10 OFFSET 10;

--12 SELECT c.first_name, c.last_name, pay.amount, pay.payment_date
--12 FROM customer as c
--12 INNER JOIN payment as pay 
--12 ON pay.customer_id = c.customer_id
--12 ORDER BY c.customer_id ASC

--13 SELECT m.*
--13 FROM film as m
--13 LEFT JOIN inventory as i
--13 ON m.film_id = i.film_id
--13 WHERE i.film_id is NULL

--14 SELECT city.city, country.country
--14 FROM city
--14 INNER JOIN country
--14 ON country.country_id = city.country_id


