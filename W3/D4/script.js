// ** scope */
{
    let a = 10
    console.log(a)
}

let a = 10
for (let i = 0; i < 2; i++){

}

/* condition if else */

/* ternary operator */

let c = (a < 5) ? 0 : -1

// Template Strings

console.log(`${a}`)
let str1 = " abc "
let str2 = `welcome to the first ${str1} lesson`
console.log(str2)

//** function */

function name(params){
    return "abc"
}

const _name = function(params){
    return "abc"
}


const _nameArrow = params => {
    return "abc"
}

const __name = params => "abc"




((param)=>{
    console.log(param)
})("with some param")


/// ** nested functions


function x(){
    let a = 3
    function y(name){
        let b = 5
        return "hi" + name
    }

    return y
}

//let _x = x()("john")
console.log(x()("john"))

const addVAT = (vat) => {
    const sum = (price) => {
        return price * vat
    }
    return sum
}

const VAT = 1.18


const calcVAT = addVAT(VAT)


const _addVAT = (vat) => (price) => price * vat
let totalPrice = _addVAT(VAT)
console.log(totalPrice(100))


// value  or refence */
let param1 = 8;
let param2 = param1;
param2 = 10;
console.log(param1)
console.log(param2)

let obj1 = {
    param: 8,
}

let obj2 = obj1;
obj2.param = 10;

let arr = [1,2,3]
let arr2 = arr;
arr2[1] = 55
console.log(arr)
console.log(arr2)

// * clone / copy */
let obj3 = {...obj1}
let arr3 = [...arr]

obj3.param = 11;

console.log(obj1)
console.log(obj1)

// old way 
let obj4 = Object.assign({}, obj1)
let arr4 = [].concat(arr)

let userJohn = {
    name: "John",
    age: 25,
    adress: {
        city: "Tel Aviv"
    }

}

// create userAnne from user John - change all values


let userAnne = {...userJohn}
userAnne.name = "Anne"
userAnne.age = 19
userAnne.adress = {...userAnne.adress}
userAnne.adress.city = "Petah  tikva"

console.log(userJohn)
console.log(userAnne)

// Object
let _c = "city"
let myObj = {
    name: "Marry",
    age: 33,
    [_c]: "tell Aviv"
}

myObj.name = "ggg"
myObj["name"] = "JJJ"


// computed / dynamic */

let _n = "name"


let sname = "John"
let age = 23

let student = {
    sname,
    age,
}

console.log(student)

function createUser(name, grade){
    return {name, grade}
}

let user1 = createUser("John", 85)

console.log(user1)