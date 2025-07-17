# Database & SQL Basics

---

## What is a Database?
A **database** stores data in an organized way.

## What is a Relational Database?
A **relational database** organizes data into tables that can be related to each other.

## What is SQL?
**SQL** stands for **Structured Query Language**—used to interact with databases.

## What is PostgreSQL?
**PostgreSQL** is an RDBMS (Relational Database Management System) tool.

## What is PGAdmin?
**PGAdmin** is a graphical user interface (GUI) for managing PostgreSQL databases.

---

## Table Structure

- **Field**: The "label" or a column name.
- **Record (Row)**: An entry in the table (a row).
- **Column**: A vertical entity containing all the data for a specific field.
- **NULL Value**: Absence of a value (different from zero or undefined).

---

## Data Types

- **Numeric**: `integer`, `decimal`, `smallint`, `serial`, etc.  
  *Used for numbers. `integer` is for whole numbers, `decimal` for precise decimals, `smallint` for smaller ranges, and `serial` auto-increments values (often used for IDs).*

- **String**: `varchar(size)`, `text`, etc.  
  *Used for text. `varchar(size)` limits the number of characters, while `text` allows for long, unlimited-length strings.*

- **Date/Time**: `timestamp`, `date`, etc.  
  *Used for storing dates and times. `timestamp` includes both date and time, while `date` stores only the date.*

- **Boolean**: `true` or `false`  
  *Used for logical values, representing either true or false.*
