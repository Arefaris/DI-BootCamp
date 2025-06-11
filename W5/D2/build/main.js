"use strict";
const sum = (a, b) => {
    return a + b;
};
// type number
let num = 1;
num = 4;
// type string
let str = "abc";
str = "abc";
//type boolean 
let bool = true;
bool = false; //true
//type any try not to use it as musch as possible
let a;
//union type
let StrNum;
StrNum = 0;
StrNum = "a";
// type array
//only strings
let arr = ["1", "2", "3"];
arr.push("111");
//either strings or numbers
let arrStrNum = [];
arrStrNum[0] = 1;
// type tuple
//you cannot change the order. can
let MyPyple = ["abc", 2, "abc"];
let myArr = ["a", 2, "b"];
// type object (everything in js is an object, be careful)
let obj = {};
const user = {
    name: "John",
    age: 25
};
let url = "http....";
let url1 = "htt12";
let userJohn = {
    name: "bob",
    age: 25,
    gender: "male"
};
let userMarry = {
    name: "Marry",
    age: 24,
    gender: "F"
};
let userDan = {
    name: "dan",
    age: 22,
    gender: "M"
};
// type Enum
var Grade;
(function (Grade) {
    Grade["U"] = "60";
    Grade["D"] = "70";
    Grade["C"] = "89";
    Grade["B"] = "90";
    Grade["A"] = "100";
})(Grade || (Grade = {}));
console.log(Grade);
let statuscode;
statuscode = "succes";
let stud1 = {
    name: "Trump",
    grade: Grade.U,
    gender: "other",
    status: "404"
};
