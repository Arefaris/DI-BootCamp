// js variables
// var
// 
// ES6
// let 
// const

var username;
let x = 10;

const COLOR = "red";
username = "John";
console.log(username);

//let a = 3, b = a, c = 2;

// can be number string or boolean
/*
    x
    is
    a
    number
*/

//**Strings */

let str = "string"
let str1 = 'str'
let str2 = `backistick`

let strs = str +"\n" + str1
console.log(strs)
console.log(str2)

/** length */
let len = str2.length
console.log(len)
//** indexOf */
//case sensetive
let index = str2.indexOf("is")
let index2 = str2.lastIndexOf("is")
console.log(index)

/** toLowerCase toUpperCase */

console.log(str.toUpperCase());


/** Numbers */
let num1 = 5
let num2 = 5
let num3 = NaN;
let sum = num1 + num3
console.log(sum)
console.log(num1 + num2);

console.log(5 + parseFloat("5.1"))

num1.toString()


/** Boolean */
/** true / > 0
false / 0 */

let bol = true
const ISSAFE = false


/** Null */
let nu = null;

/** Comparison */
/**
 * =
 * ==
 * ===
 * !=
 * !==
 */
console.log(5 != 5)
console.log(5 !== "5")


//**
// !
// &
// ||
//  */
console.log((5 == 6) && (6 == 6))
console.log(!true);
console.log(!!"abc")

/** operator */
//**
// 
//  */

let xx = 0
console.log(++xx)



let b = 3, d = b, u = b;

// 9 * 12 
// 4 * 4 + 3 * 3
//2 + 3 
// 4 * 3

const tree = ++d * d*b * b++ +
 + --d+ + +b-- +
 + +d*b+ +
 u


 //** user interface function */
 // alert()
 // let s = prompt("what is your age?")
// let yesno = confirm("Are you going to the party?")

//** Array */
let arr = []
let arr1 = new Array()

console.log(arr)
arr[0] = 1
arr[1] = "a"
arr1[0] = "b"
arr1[1] = "c"
console.log(arr, arr1)
console.log(arr[1])

//** lenght */
console.log(arr.length)

//** push / pop */
arr.push("1")
let abc = arr.pop()
console.log(arr, abc)


//** unshift / shift */
//arr.shift()
//arr.unshift()

console.log(arr.toString())

//** join */

console.log(arr.join(","))

/** slice */
let fruits = ["banana", "orange", "kiwi", "mango"]
let arr4 = fruits.slice(1, 2)
console.log(arr4)


// splice */
// cutting array in two
let arr7 = fruits.splice(1, 2, "abc", "cde")
console.log(fruits)

// object //

let obj = {
    name: "john",
    age: 25,
    grades: [90, 88, 75],
    address: {
        city: "Tel Aviv"
    }
}

let ob1 = new Object();
obj.name = "anne"
console.log(obj.grades)
console.log(obj.name)
console.log(obj["name"])
console.log(obj.address.city)

let arr9 = [1,2, [3,[5],8], 10]
console.log(arr9[2][1][0])

/** if
 * else if
 * else
 * 
 * switch
 */

if (5 ===  5){
    console.log("5 equals 5")
}
else if (a > b){
    console.log("b greater than a")
}
else {
    console.log("not true condition")
}

let page = "home"
switch (page){
    case "homepage":
        console.log("home")
        break
    case "about":
        console.log("about")
        break
    default:
        console.log("404")
        break
}