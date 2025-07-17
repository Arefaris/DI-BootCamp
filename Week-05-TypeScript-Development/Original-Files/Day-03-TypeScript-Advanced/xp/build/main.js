"use strict";
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getEmployeeInfo() {
        return [this.name, this.position];
    }
}
let bob = new Employee("john", 124, "teacher", "school");
console.log(bob.getEmployeeInfo());
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getProductInfo() {
        return this.name + " " + this.price;
    }
}
let milk = new Product(56, "korovka", 15);
// console.log(milk.getProductInfo())
//Cannot assign to 'id' because it is a read-only property.
//milk.id = 125
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return "default sound";
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        return "bark";
    }
}
let charly = new Dog("charly");
console.log(charly.makeSound());
class Calculator {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
}
Calculator.add(1, 2);
Calculator.subtract(5, 2);
const userJohn = {
    id: 25,
    name: "bob",
    email: "myEmail.com",
    membershipLivel: "exclusive"
};
const printUserDetails = (PremiumUser) => {
    console.log(PremiumUser.name, PremiumUser.email, PremiumUser.membershipLivel);
};
printUserDetails(userJohn);
