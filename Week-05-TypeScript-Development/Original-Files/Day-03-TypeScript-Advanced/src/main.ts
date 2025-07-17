type Operation = (a:number, b:number) => number


const sumAB: Operation = (a, b) => {
    return a + b
}

const multiAB: Operation = (c, d) =>{
    return c + d
}

const divide: Operation = (a, b)=>{
    //type guard //
    if (b === 0) return -1
    return a / b
}

const sum = (a:number, b:number): number =>{
    return a + b;
}

const converToString = (a: number, b: number): string =>{
    return a + b + ""
}

const multi = (a: number, b: number): number => {
    return a * b
}

const decrement = (a: number, b:number): number => {
    return a - b
}

// ** default parameters */
const addDefault = (a:number, b:number = 5): number =>{
    return a + b
}

/**
 * Create a function with 2 parameters
 * - number and an aliase of a string and number
 * return a string or a number as sum or concat;
 */



const myFunc = (a: number, b: string | number ): string | number=>{
    if (typeof(b) === "string"){
        return a + b + ""
    }else {
        return a + b
    }
    
}

console.log(myFunc(5, 5))

// optional params

const  addOptional = (a: number, b?: number): number => {
    return a + (b || 0)
}

console.log(addOptional(2, 5))

// never type //

const errorMessage = (message: string): never => {
    throw new Error(message)
}

const numberOrString = (value: number | string | undefined | boolean): string => {
    if (typeof value === "string" ){
        return "this is a string"
    }
     if (typeof value === "number" ){
        return "this is a string"
    }
    return errorMessage("this is not a string or number")
}

const infite =(): never =>{
    while(true){}
}

// void //
const log = (msg: string): void => {
    console.log(msg)
}

// function overload // 
// PRACTICE!!!
function add(a: number, b:number): number;
function add(a: string, b:string): string;
function add(a: number | string, b: number | string): number | string {
    if(typeof a === "string" && typeof b === "string") return a + b + ""
    if(typeof a === "number" && typeof b === "number") return a + b
    return -1
}

//assertions or castings
type One = string
type Two = string | number
type Three = "hello"

let a: One = "hi";
// less specific
let b = a as Two
console.log("b", b)
// more specific
let c = a as Three
c = "hello"

let d = <One> "abc"
let e = <Two> 1
let f = <Three>"hello" 

// Dom Elements

// const myImg = document.querySelector("img")
// if (myImg) myImg.src = "/images/a.jpg"

// // not null
// const myImg2 = document.querySelector("img")!;
// myImg2.src = "/images/b.jpg"


// const myImg3 = document.querySelector("img") as HTMLImageElement
// myImg3.src = "123"


// const myImg4 = <HTMLImageElement>document.querySelector("img")

const spanYear = document.querySelector("span") as HTMLSpanElement
const date = new Date()
const year = date.getFullYear()
spanYear.textContent = String(year)

// Classes //
// Access modifiers //
// public - anywhere
// protected - within the class and subclass
// private - withing the class only

class User {
    public name: string
    private age: number
    protected active: boolean

    constructor(name: string, age: number, active: boolean) {
        this.name = name
        this.age = age 
        this.active = active
    }

    getAge(): number{
        return this.age
    }

    getActive(): boolean{
        return this.active
    }
}


const userJohn = new User("John", 25, true)

console.log(userJohn.name)
console.log(userJohn.getAge())
console.log(userJohn.getActive())

class Student extends User {
    constructor(name: string, age: number, active: boolean){
        super(name, age, active)
    }

    getStudentAge(): string {
        //cant have acces to private this.age
        return this.name + " is " + this.getAge + ""
    }

    isStudentActive(): string {
        //have acces to protected
        return this.name + " is " + this.active
    }
}

const stud1 = new Student("Anne", 25, true)
console.log(stud1.name)
console.log(stud1.getAge())
console.log(stud1.getActive)