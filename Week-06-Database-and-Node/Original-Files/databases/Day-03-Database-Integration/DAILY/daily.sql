
-- 1. 
CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100) NOT NULL
);

CREATE TABLE Customer_Profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INTEGER UNIQUE,
    FOREIGN KEY (customer_id) REFERENCES Customer(id)
);


INSERT INTO Customer (first_name, last_name) VALUES 
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');


INSERT INTO Customer_Profile (isLoggedIn, customer_id) VALUES 
(true, (SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe')),
(false, (SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));


SELECT c.first_name 
FROM Customer c
INNER JOIN Customer_Profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = true;


SELECT c.first_name, cp.isLoggedIn
FROM Customer c
LEFT JOIN Customer_Profile cp ON c.id = cp.customer_id;


SELECT COUNT(*) as not_logged_in_count
FROM Customer c
LEFT JOIN Customer_Profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = false OR cp.isLoggedIn IS NULL;

CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    author VARCHAR(100) NOT NULL
);


INSERT INTO Book (title, author) VALUES 
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');


CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    age INTEGER,
    CHECK (age <= 15)
);

INSERT INTO Student (name, age) VALUES 
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

-- 5.
CREATE TABLE Library (
    book_fk_id INTEGER,
    student_fk_id INTEGER,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- 6. 
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date) VALUES 
(
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'John'),
    '2022-02-15'
),
(
    (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-03-03'
),
(
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'Lera'),
    '2021-05-23'
),
(
    (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-08-12'
);

-- 7.
SELECT * FROM Library;


SELECT s.name, b.title
FROM Library l
INNER JOIN Student s ON l.student_fk_id = s.student_id
INNER JOIN Book b ON l.book_fk_id = b.book_id;

-- Select average age of children who borrowed "Alice in Wonderland"
SELECT AVG(s.age) as average_age
FROM Library l
INNER JOIN Student s ON l.student_fk_id = s.student_id
INNER JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

SELECT c.id, c.first_name, c.last_name, cp.isLoggedIn
FROM Customer c
LEFT JOIN Customer_Profile cp ON c.id = cp.customer_id;

SELECT b.title, b.author, s.name as student_name, l.borrowed_date
FROM Book b
LEFT JOIN Library l ON b.book_id = l.book_fk_id
LEFT JOIN Student s ON l.student_fk_id = s.student_id
ORDER BY b.title, l.borrowed_date;


-- Before deletion - show current library records
SELECT 'Before deletion:' as status;
SELECT l.*, s.name, b.title 
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

-- Delete a student (this will cascade to Library table)
DELETE FROM Student WHERE name = 'Bob';

-- After deletion - show remaining library records
SELECT 'After deleting Bob:' as status;
SELECT l.*, s.name, b.title 
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

-- Show what happened: Bob's records were automatically removed from Library table
-- due to ON DELETE CASCADE constraint