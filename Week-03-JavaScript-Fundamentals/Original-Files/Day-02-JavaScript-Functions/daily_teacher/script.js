/** not/ bad */
// let sentence = "The movie is not that bad, I like it"

// let wordNot = sentence.indexOf("not")
// let wordBad = sentence.indexOf("bad")

// if (wordNot != -1 && wordBad !== -1 && wordBad > wordNot){
//     let before = sentence.slice(0, wordNot);
//     let after = sentence.slice(wordBad + 3);
//     console.log(before + "good" + after);
// }
// else {
//     console.log(sentence);
    
// }

/**loops*/
let users = ["john", "marie", "Anne"]
for (let i = 0; i < users.length; i++){
    console.log(users[i]);
    
}

//** for in */
let obj = {
    name: "john",
    last: "Due",
    age: 25
}

// only loop to iterate object

for (let x in users){
    console.log(x, users[x])
}
 
for (const x in obj){
    console.log(x, obj[x])
}

//** for of */
for(let user of users){
    console.log(user)
}

//** while */
//** first ask then do

// while (i < 5)
// if (i === 2) {
/// break
// }
// continue
// 
//  */

// do while
// 
// firts do, then ask
let x = 0
do {
 console.log(x)
 x++
}while (x < 0)

// Functions 

function nameFun(){
    //**
    // function logic
    // 
    // 
    // 
    //  */

    console.log("Hello from function")
}

nameFun()

function logName(param, param1){
    console.log(param, param1)

}

logName("hello", "john")

function getFullName(name, lastname){
    //return [name, lastname]
    return {
        name: name,
        last: lastname
    }
}

let val = getFullName("john", "wick")
console.log(val)

function sum(a = 1, b = 1){
    if(!isNaN(a) && !isNaN(b)){
        console.log("not a number")
        return -1
    }
    a += 10
    // if (b === undefined){
    //     b = 1
    // }
    return a + b
}

let res = sum(undefined,5)
console.log(res)

//** function declaration - hoisting *//
function multi(a, b){
    return a * b
}

let m = multi(5, 5)
console.log(m)

// ** function expression */
const divide = function(a, b) {
    return a/ b
}

//** ES6 Arrow function */
const minus = (a,b) => {
    return a - b
}

const _minus = (a, b) => a - b

const __minus = a => a + 5

const changeToLowerCase = s => s.toLowerCase()

console.log(changeToLowerCase("ABC"))

/// DOM
