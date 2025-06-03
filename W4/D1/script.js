/* Exercise reverse
*  reverse each word in a given String
*  For example:
*  Given this 'word in a given String'
*  result 'drow ni a nevig gnirtS'
*  Do not use Array method 
*  Try not to use chatGPT :)
*/

// 

// function reverseWord(str){
//     let ret = ""
//     for(let i = str.length - 1; i> 0; i--){
//         ret += str[i]
//     }
//     return ret
// }

// function reverseAll(string){
//     let arr = string.split(" ")
//     let ret = []
//     for (const x of arr){
//         ret.push(reverseWord(x))
//     }
//     return ret.join(" ")
// }

// console.log(reverseAll("word in a given String"))


const users = ["John", "Marry", "Dan", "Anne"]
const arr = []
// for (let user in users){
//     users[user] = users[user] + "@gmail.com"
// }

//console.log(users)

// for each
// item/element - (item) => {}
// index - optional
// array - optional

users.forEach((user, i, arr2)=>{
    console.log(i)
    arr.push(user + "@gmail.com")
})

let numbers = [1, 2, 3, 4]
let num = multiply(numbers)

console.log(num)

function multiply(numbers){
    let multi = []
    numbers.forEach((number)=>{
        multi.push(number * 2)

    })

    return multi
}


// map
// array
//(item, index) => {}
//map returning new array
// we cant change size of the array with map
// let resultArr = numbers.map((item) => {
//     return item * 2
// })

let resultArr = []
numbers.forEach((item)=>{
    if (item > 2){
        resultArr.push(item * 2)
    }
})

console.log(resultArr)


// filter method
// return an new filltered array
// 

let filteredArray = numbers.filter((item) =>{
    return item > 2
})

console.log(filteredArray)


// let newUsers = [
//   { id: 1, name: "John", email: "John@gmail.com" },
//   { id: 2, name: "Marry", email: "Marry@gmail.com" },
//   { id: 3, name: "Anne", email: "Anne@gmail.com" },
//   { id: 4, name: "Or", email: "Or@gmail.com" },
// ];

/** filter the object of user that has an 'a' in name case insensitive */

// let caseArray = newUsers.filter((user)=>{
//     return user.name.toLowerCase().includes("a")
// })

// console.log(caseArray)


// find // findeIndex
// finds value
// let user = newUsers.find(item =>{
//     return item.name.toLowerCase().includes("a")
// })

//finds index. if not found -1
// let userIndex = newUsers.findIndex(item =>{
//     return item.name.toLowerCase().includes("a")
// })
// console.log(userIndex)

let newUsers = [
  { id: 1, name: "John", email: "John@gmail.com" },
  { id: 2, name: "Marry", email: "Marry@gmail.com" },
  { id: 3, name: "Anne", email: "Anne@gmail.com" },
  { id: 4, name: "Or", email: "Or@gmail.com" },
];


const root = document.getElementById("root")

newUsers.forEach(user => {
    let name = document.createElement("h1")
    let email = document.createElement("h2")
    let id = document.createElement("h3")

    name.textContent = user.name
    email.textContent = user.email
    id.textContent = user.id

    console.log(root)
    root.appendChild(id)
    root.appendChild(name)
    root.appendChild(email)
    
})

function render(arr) {
    let html = arr.map(item => {
        return `<div></div>`
    })
}
render(newUsers)

/** Exercise
 * Create an function that get an array of Numbers as input
 * and return the sum of all numbers
 * For example:
 * Give this array [2, 5, 10,100]
 * result 117
 */

let nmb = [2, 5, 10,100]

function sumAll(arr){
    let sum = 0
    arr.forEach((item) => {
        sum += item
    })

    return sum
}

console.log(sumAll(nmb))


//** reduce */

let sum = nmb.reduce((sum, item) => {
    return sum + item
})

console.log(sum)

//** some / every */

let match = nmb.some(item => {
    return item == 2
})

console.log(match)

let match1 = numbers.every(item =>{
    return item > 0
})

console.log(match1)

let a = nmb[0]
let b = nmb[1]
let c = nmb[2]



// array desctructioring

let [d, e, f ] = nmb
console.log(d, e, f);

//** rest parameters */
let [a1, b1, ...c1] = nmb
console.log(a1, b1, c1)

// spread operator
let arr1 = [1,2]
let arr2 = ["a", "b"]
let arr4 = [...arr1, ...arr2]
console.log(arr4)
