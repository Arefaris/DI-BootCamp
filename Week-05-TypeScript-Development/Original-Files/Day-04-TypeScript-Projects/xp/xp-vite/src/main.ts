type Person1 = {
    name: string
    age: number
}
type Adress = {
    street: string,
    city: string
}

type PersonWithAddress = Person1 & Adress

const John: PersonWithAddress = {
    name: "John",
    age: 25,
    street: "grechnevaya",
    city: "Haifa"
} 


const describeValue = (age: number | string)=>{
    if (typeof age === "number") return "This is a number"
    if (typeof age === "string") return "This is a string"
}

console.log(describeValue("123"))


let someValue: any 

someValue = "123" as string

console.log(someValue)


const getFirstElement = (args: (string | number)[])=>{
    return args[0] as string
}

console.log(getFirstElement(["2", 1, "5"]))

function logLength<T extends { length: number }>(arg: T): void {
  console.log(arg.length);
}


type Person = {
    name: string,
    age: number
}

type Job = {
    position: string; 
    department: string;
}

type Employee = Person & Job

let emp1: Employee = {
    name: "Bob",
    age: 25,
    position: "Manager",
    department: "hr"
}
const describeEmployee = (emp: Employee)=>{
    if (emp.position === "Manager") return `${emp.position} in ${emp.department}`
    if (emp.position === "Developer") return `${emp.position} in ${emp.department}`
}

console.log(describeEmployee(emp1))

const formatInput = <T extends { toString(): string}>(arg: T)=>{
    return arg.toString() as string
} 

console.log(formatInput(123))