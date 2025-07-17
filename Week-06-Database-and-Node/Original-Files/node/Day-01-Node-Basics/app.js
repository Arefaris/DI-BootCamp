// console.log('1')
// // nodemon - like node --watch

// for (let i = 0; i < 5; i++){
//     console.log(i)
// }

// axios
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=> res.json())
// .then((data)=>console.log(data))
// .catch((e) => console.log(e))

// Node Js Module System
/**
 *1. Module that you create
  2. NPM - Node Package Manager
  3. Core module FS, HTTP and more
 */

// const greeting = (name)=>{
//     return `Welcome, ${name} to Node Js week!`
// }

// ///console.log(greeting("Jonh"))
// const hello = (name) => {
//     return `Hi ${name}`
// }
// // module.exports + require - CommoneJS
// // ES export / export default + import
// //package.json

// module.exports = {greeting, hello};
// //exercise
// import {multi, divide, plus, minus}  from "./math/math.js"

// console.log(multi(1, 1))
// console.log(divide(5,2))
// console.log(plus(2,2))
// console.log(minus(5,1))


//bcrypt 
// import axios from 'axios'
// const response = await axios.get("https://jsonplaceholder.typicode.com/users")
// console.log(response.data)

import {fetchData} from "./data/fetchData.js"

console.log(await fetchData("https://jsonplaceholder.typicode.com/users"))