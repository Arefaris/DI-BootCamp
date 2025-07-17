// ** Object & Classes */


let user = {
    name: "John",
    email: "jjj@gmail.com",
    age: 25
}

console.log(user)

/* get / set */
let value = user.name
let value1 = user.age

console.log(value, value1)

user.age = 35
user["email"] = "j@test.com"
let value2 = user.email

console.log(value, value1, value2)

user.address = "tel aviv"

for(const x in user){
    console.log(x, user[x])
}


//to conver object to an array


// Object.keys
// Object.values
// Object.entries

let userKeys = Object.keys(user)
console.log(userKeys)
let userValues = Object.values(user)
console.log(userValues)
let useren = Object.entries(user)
console.log(useren)

useren.forEach((item)=>{
    const [key, value] = item;
    console.log(key, value)
})


//
// Object.fromEntries()
let arr = [
  ["name", "Anne"],
  ["age",22],
  ["gender", "F"]
]

let anneUser = Object.fromEntries(arr)
console.log(anneUser);

//** Object destructuring */


let user24 = {
    name: "John",
    email: "jjj@gmail.com",
    age: 25,
    address: {
        city: "tel aviv"
    }
}

let {name, age, email, address: {city}} = user 
console.log(name, age, email, city)

function getUserInfo(obj){
    const {name, age, email, address: {city}} = obj
    return name + " " + age + " " + email + " " + city
}

// object spreading

let UserAnne = {...user, name: "anne", age: 35, gender: "f"}


let name55 = "marie"
let age22 = 26
let gender = "F"
let userMarry = {
    name55,
    age22, 
    gender
}

//** this - what is this */

let student = {
    name: "marry",
    hello: function() {
        console.log("welcome", this.name)
    },
    // in the arrow function this refering to the global
    getname: ()=>{
        console.log(this)
    }
}

student.hello()
student.getname()


//** Class */ 

class Animal {
    constructor(paramName, paramType){
        this.name = paramName
        this.type = paramType
    }
    // no need for function keyword (this is a method)
    voice() {
        if (this.type === "dog"){
            return "Bark"
        }else if(this.type == "cat"){
            return "Meow"
        }else {
            return "No voice found 404"
        }
    }

    /// ** getter / Setter */
    getName(){
        return this.name
    }

    setName(value){
        return this.name = value;
    }

    set animalType(value){
        this.type = value
    }

    get animalType(){
        return this.type
    }
}

const myDog = new Animal("shadow", "dog")
const yourDog = new Animal("Spoty", "dog")
const cat = new Animal("CatCat", "cat")

// inherit
class Dog extends Animal {
    constructor(name, gender){
        super(name, "dog")
        this.gender = gender
    }
    getGender() {
        return this.gender
    }
}

console.log(myDog.voice())
const myDogs = new Dog("kuku", "female")
console.log(myDogs.getName())

/**
 * Create a User class
 * Store the name of the user in a "name" variable
 * Add hello method that will log 'Hello' and the name of the user
 * Create a Student class that exetends User
 * Create 3 instances of Student class, add them to an Array
 * Loop the array and call hello method
 */

class User {
    constructor(name){
        this.name = name
    }

    hello(){
        console.log("Hello", this.name)
    }
}

class Student extends User {
    constructor(name){
        super(name)
    }
}

let studen1 = new Student("Masha")
let studen2 = new Student("Andrey")
let studen3 = new Student("Olexei")

let students = [studen1, studen2, studen3]

students.forEach((student)=> student.hello())