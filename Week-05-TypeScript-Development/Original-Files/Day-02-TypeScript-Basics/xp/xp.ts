//ex 1
console.log("Hello, World")

//ex2
//let age: number = 1
//let name: string = "name"
//console.log(age, name)


//ex3
let id: string | number

//ex 4
function num(num: number): string{
    if (num === 0){
        return "zero"
    }else if (num > 0) {
        return "positive"
    }else {
        return "negative"
    }
}

console.log(num(1))

//ex 5 
const getDetails = (name: string, age: number): [string, number, string] =>{
 return [name, age, `Hello, ${name}! you are ${age} years old.`]
}

console.log(getDetails("Alice", 25))

//ex 6
type Person = {
    name: string,
    age: number
}

const createPerson = (name: string, age: number): Person =>{
    let person: Person = {
        name: name,
        age: age
    }

    return person
}

console.log(createPerson("bob", 25))

//ex 7
let bob = document.getElementById("bob") as HTMLInputElement
bob.value = "1000"
console.log(bob.value)

//ex 8

const getAction = (user: string): string =>{
    switch (user){
        case "admin":
            return "Manage users and settings"
        case "editor":
            return "Edit content"
        case "viewer":
            return "View content"
        case "guest":
            return "Limited acces"
        default:
            return "Invalid role"
    }
}

console.log(getAction("admin")); // Output: Manage users and settings
console.log(getAction("editor")); // Output: Edit content
console.log(getAction("viewer")); // Output: View content
console.log(getAction("guest")); // Output: Limited access

//ex9
const greet = (name?: string)=> {
    if (name === undefined){
        return "hello guest!"
    }else{
        return `hello ${name}`
    }
}

console.log(greet())