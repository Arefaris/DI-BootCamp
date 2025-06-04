//ex 1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;


//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


//ex2
function displayStudentInfo(objUser){
    //destructuring
    const {first, last} = objUser
    return `Your full name is ${first} ${last}`
}

let info = displayStudentInfo({first: 'Elie', last:'Schoppik'});
console.log(info)

//ex3

const users = { user1: 18273, user2: 92833, user3: 90315 }

let arr = Object.entries(users)
console.log(arr)
arr.forEach((user)=> user[1] = user[1] * 2)

console.log(arr)

//ex 4
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
//object
console.log(typeof member);


//ex 5

class Dog {
  constructor(name) {
    this.name = name;
  }
};


  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};


//[2] === [2] 
//False
//False
//javascript compares objects and arrays by reference, not by value
//{} === {}

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) // value is 4. because object2 is a reference to object 1. and we changed number of object 1 
console.log(object3.number) // value is 4. since its a referense of object 2
console.log(object4.number)// value is 5. its a new object


class Animal{
    constructor(name, type, color){
        this.name = name
        this.type = type
        this.color = color
    }
}

class Mammal extends Animal{
    constructor(name, type, color){
        super(name, type, color)
    }

    sound(sound){
        return `${sound} Im a ${this.type}, named ${this.name} and im ${this.color}`
    }
}


let farmerCow = new Mammal("Lilly", "Cow", "brown")
console.log(farmerCow.sound("Moooo"))