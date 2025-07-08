-- CREATING A CHILD TABLE - THE ONE WITH THE FOREIGN KEY (FK)

-- CREATE TABLE movies(
-- movie_id SERIAL,
-- movie_title VARCHAR (50) NOT NULL,
-- movie_story TEXT,
-- actor_playing_id INTEGER,
-- PRIMARY KEY (movie_id),
-- FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id)
-- );


-- INSERT INTO movies (movie_title, movie_story, actor_playing_id) 
-- VALUES
--     ('Good Will Hunting', 'Written by Affleck and Damon, 
-- 	 the film follows 20-year-old South Boston janitor Will Hunting',
-- 	 (SELECT actor_id FROM actors WHERE first_name = 'Matt' AND last_name = 'Damon'));

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id) 
-- VALUES
-- ('Oceans Eleven',
--  'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
-- (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon')),
-- ('The Devil wears Prada', 'Andy is a recent college graduate with big dreams. 
--  Upon landing a job at prestigious Runway magazine, 
--  she finds herself the assistant to diabolical editor Miranda Priestly.', 
-- (SELECT actor_id FROM actors WHERE first_name = 'Meryl' AND last_name = 'Streep'));

-- SELECT * FROM movies

-- SELECT actors.first_name,
-- 	actors.last_name,
-- 	movies.movie_title
-- FROM actors
-- INNER JOIN movies ON actors.actor_id = movies.actor_playing_id


-- EXERCISE
-- CREATE TABLE producers (
--     producer_id SERIAL,
--     first_name VARCHAR(50),
--     last_name VARCHAR(50),
--     movie_id INTEGER,
-- 	PRIMARY KEY (producer_id),
--     FOREIGN KEY (movie_id) REFERENCES movies(movie_id)
-- );

-- INSERT INTO producers (first_name, last_name, movie_id) 
-- VALUES
-- ('Lawrence', 'Bender', (SELECT movie_id FROM movies WHERE movie_title = 'Good Will Hunting')),
-- ('Jerry', 'Weintraub', (SELECT movie_id FROM movies WHERE movie_title = 'Oceans Eleven'));
	 
-- SELECT * FROM producers
	 
-- SELECT p.first_name, p.last_name, m.movie_title
-- FROM producers AS p
-- INNER JOIN movies AS m
-- ON p.movie_id = m.movie_id
	 
	 