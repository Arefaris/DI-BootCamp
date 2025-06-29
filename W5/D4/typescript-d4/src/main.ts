// static in classes


class Student {

  static count: number = 0;
  
  static getCount(): number {
    return Student.count
  }

  name: string;
  id: number;
  constructor(name: string) {
    this.name = name
    this.id = ++Student.count
  }
}

const std1 = new Student("John")
const std2 = new Student("Anne")
const std3 = new Student("DAn")

console.log(std1);
console.log(std2);
console.log(std3, Student.getCount());


// index signature // keys

interface Employe {
  [key: string | number]: string | number
  name: string;
  age: number;
  role: string;
}

const EmployeJohn: Employe = {
  name: "John",
  age: 33,
  role: "developer"
}

for(const key in EmployeJohn){
  console.log(key,EmployeJohn[key])
  console.log(key, EmployeJohn[key as keyof Employe])
  console.log(key, EmployeJohn[key as keyof typeof EmployeJohn])
}

//dynamic key
const prop1: string = "name";
const obj = {
  [prop1]: "abs"
}

console.log(obj)

console.log(EmployeJohn[prop1 as keyof Employe])


// Record Type //

type User = {
  name: string;
  age: number;
}

const user1: User = {
  name: "abc",
  age: 22
}

const user3: User = {
  name: "john",
  age: 123
}

type keys = "name" | "age"

type UserR = Record<keys, string | number>

const user2: User = {
  name: "abc",
  age: 12,
}

//** Generics */

const strEcho = (value: string): string => value
const numEcho = (value: number): number => value
const boolEcho = (value: boolean): boolean => value

const echo = <T>(value: T): T => value

echo<string>("abc")

// get the first element from an array

const getFirstElement = <T>(arr: T[]): T => {
  return arr[0]
}

console.log(getFirstElement<number>([1]))
console.log(getFirstElement<string>(["c", "b"]))
console.log(getFirstElement<User>([user1, user2]))

interface Person<T> {
  id:number;
  name: string;
  age: number;
  info: T;
}

const p1: Person<string | number> = {
  id: 1,
  name: "fordo",
  age: 0,
  info: "123"
}

type Info = {
  city: string;
  adress: string;
  zipcode: number;
}

const p: Person<Info> = {
  name: "anne",
  age: 25,
  id: 2,
  info: {
    city: "tlv",
    adress: "bla",
    zipcode: 12345
  },
}

// more that one generic //

const mergeArray = <T, K, Z>(arr1: T[], arr2: K[], arr3: Z[]): (T | K | Z)[] => {
  return [...arr1, ...arr2, ...arr3]
}

const nums: number[] = [1, 2, 3]
const strs: string[] = ["a", "b", "c"]
const bols: boolean[] = [true, false, false]

console.log(mergeArray(nums, strs, bols))


/**
 * Create a function isObj - get a generic type as parameter (arg: T)
 * retrun type { arg, is: true/false}
 */


const isObj = <T>(arg: T): boolean=>{
  return typeof arg === "object"
}

console.log(isObj(user1))