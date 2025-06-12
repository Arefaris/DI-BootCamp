"use strict";
const sumAB = (a, b) => {
    return a + b;
};
const multiAB = (c, d) => {
    return c + d;
};
const divide = (a, b) => {
    //type guard //
    if (b === 0)
        return -1;
    return a / b;
};
const sum = (a, b) => {
    return a + b;
};
const converToString = (a, b) => {
    return a + b + "";
};
const multi = (a, b) => {
    return a * b;
};
const decrement = (a, b) => {
    return a - b;
};
// ** default parameters */
const addDefault = (a, b = 5) => {
    return a + b;
};
/**
 * Create a function with 2 parameters
 * - number and an aliase of a string and number
 * return a string or a number as sum or concat;
 */
const myFunc = (a, b) => {
    if (typeof (b) === "string") {
        return a + b + "";
    }
    else {
        return a + b;
    }
};
console.log(myFunc(5, 5));
// optional params
const addOptional = (a, b) => {
    return a + (b || 0);
};
console.log(addOptional(2, 5));
// never type //
const errorMessage = (message) => {
    throw new Error(message);
};
const numberOrString = (value) => {
    if (typeof value === "string") {
        return "this is a string";
    }
    if (typeof value === "number") {
        return "this is a string";
    }
    return errorMessage("this is not a string or number");
};
const infite = () => {
    while (true) { }
};
// void //
const log = (msg) => {
    console.log(msg);
};
function add(a, b) {
    if (typeof a === "string" && typeof b === "string")
        return a + b + "";
    if (typeof a === "number" && typeof b === "number")
        return a + b;
    return -1;
}
let a = "hi";
// less specific
let b = a;
console.log("b", b);
// more specific
let c = a;
c = "hello";
let d = "abc";
let e = 1;
let f = "hello";
// Dom Elements
// const myImg = document.querySelector("img")
// if (myImg) myImg.src = "/images/a.jpg"
// // not null
// const myImg2 = document.querySelector("img")!;
// myImg2.src = "/images/b.jpg"
// const myImg3 = document.querySelector("img") as HTMLImageElement
// myImg3.src = "123"
// const myImg4 = <HTMLImageElement>document.querySelector("img")
const spanYear = document.querySelector("span");
const date = new Date();
const year = date.getFullYear();
spanYear.textContent = String(year);
// Classes //
// Access modifiers //
// public - anywhere
// protected - within the class and subclass
// private - withing the class only
class User {
    constructor(name, age, active) {
        this.name = name;
        this.age = age;
        this.active = active;
    }
    getAge() {
        return this.age;
    }
    getActive() {
        return this.active;
    }
}
const userJohn = new User("John", 25, true);
console.log(userJohn.name);
console.log(userJohn.getAge());
console.log(userJohn.getActive());
class Student extends User {
    constructor(name, age, active) {
        super(name, age, active);
    }
    getStudentAge() {
        //cant have acces to private this.age
        return this.name + " is " + this.getAge + "";
    }
    isStudentActive() {
        //have acces to protected
        return this.name + " is " + this.active;
    }
}
const stud1 = new Student("Anne", 25, true);
console.log(stud1.name);
console.log(stud1.getAge());
console.log(stud1.getActive);
