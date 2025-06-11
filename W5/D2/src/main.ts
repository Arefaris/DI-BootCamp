const sum = (a: number, b: number): number => {
    return a + b
}

// type number
let num: number = 1;
num = 4


// type string
let str: string = "abc";
str = "abc"

//type boolean 
let bool: boolean = true;
bool = false//true

//type any try not to use it as musch as possible
let a: any;


//union type
let StrNum: string | number
StrNum = 0
StrNum = "a"


// type array
//only strings
let arr: string[] = ["1","2","3"]
arr.push("111")

//either strings or numbers
let arrStrNum: (string | number)[] = []
arrStrNum[0] = 1

// type tuple
//you cannot change the order. can
let MyPyple: [string, number, string] = ["abc", 2, "abc"]
type myTyple = [string, number, string];

let myArr: myTyple = ["a", 2, "b"]


// type object (everything in js is an object, be careful)
let obj: object = {}

const user = {
    name: "John",
    age: 25
}

// type / interface //

type MyString = string | number;
let url: MyString = "http...."
let url1: string = "htt12"

type User = {
    name: string,
    age: number,
    //optional property ?
    gender?: string | number;
}

let userJohn: User = {
    name: "bob",
    age: 25,
    gender: "male"
}


let userMarry: User = {
    name: "Marry",
    age: 24,
    gender: "F"
}


// interface

interface UserI {
    name: string,
    age: number,
    //optional property ?
    gender?: string | number;
}


let userDan: UserI = {
    name: "dan",
    age: 22,
    gender: "M"
}


type Auser = User | UserI

// type Enum
enum Grade {
    U = "60",
    D = "70",
    C = "89",
    B = "90",
    A = "100"
}

console.log(Grade)


// type literal

type status = "failed" | "loading" | "succes" | "404"

let statuscode: status

statuscode = "succes"


// type Aliases

type NumberOrString = number | string
type NumberOrStringOrBoolean = NumberOrString | boolean
type NewUser = {
    name: NumberOrString

}

type gender = "male" | "female" | "other";

type student = {
    name: string,
    grade: Grade,
    gender: gender,
    status: status
}

let stud1: student = {
    name: "Trump",
    grade: Grade.U,
    gender: "other",
    status: "404"
}