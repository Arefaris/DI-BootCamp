**W2 - OOP - Object-Oriented Programming**

**Day 1**

* **Class**: A blueprint for creating objects
* **Objects**: An instance of a class
  `cat_1 = Cat('miau', 5)`
* **Methods**: Functions related to a certain class

**Day 2**

* **Inheritance**: A class can inherit attributes and methods from another class.
  These classes are called "parent" and "child."
* **Multiple Inheritance**: A class can inherit from more than one class (two or more parents).
* **`super()`**: Initializes attributes from the parent class.
* **Polymorphism**: Using a method with the same name in multiple classes that are related.
* **`try` and `except` block**: Useful for data validation and preventing internal errors that could crash the code.

**Day 3**

* **Decorators**:

  * `@staticmethod`: A method that doesn’t require `self` or `cls`.
  * `@classmethod`: A method that can be called on the class itself (before creating an object).
  * `@property`: A method that behaves like an attribute (you can access the output using dot notation, e.g., `obj1.age`).

* **Dunder Methods**: Short for “double underscore,” also called "magic methods."

  * `__init__(self)`
  * `__str__(self)`
  * `__repr__(self)`
  * `__lt__(self)`
  * `__eq__(self)`

These methods are triggered automatically, often through math or comparison operations.
