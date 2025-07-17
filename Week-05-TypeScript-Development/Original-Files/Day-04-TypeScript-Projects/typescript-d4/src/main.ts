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


// const isObj = <T>(arg: T): T=>{
//   return typeof arg === "object" ? {arg, true} :
// }

// console.log(isObj(user1))

function isObj<T>(arg: T): { arg: T; is: boolean } {
  const is = typeof arg === 'object'
  return { arg, is };
}

// Utility  types */
// Partial

type  Post = {
  id: number;
  title: string;
  body: string;
}


type PartialPost = Partial<Post>

const post1: Post = {
  id:1,
  title: "abc",
  body: "text"
}

const post2: PartialPost = {
  id:2,
  body: "text"
}

const updatePost = (post: Post, propToUpdate: Partial<Post>): Post => {
  return {...post, ...propToUpdate}

}

console.log(post1)

console.log(updatePost(post1, {id: 2}))


//**Pick or Omit */ Object type
type PostIdBody = Pick<Post, "id" | "body">
type PostBody = Omit<Post, "title" | "id">


//** Exlude or Extract */ Union type
type Grade = "A" | "B" | "C" | "D" | "F"
type PassGrade = Exclude<Grade, "D" | "F">
type FailedGrade  = Extract<Grade, "D" | "F">

//**NonNullable */ removes null and undefined from type
type NullString = string | null | undefined
type NotNullString = NonNullable<NullString>

// return type /
const createUser = (name: string, age: number)=>{
  return {name, age, active: true}
}

type UserT = ReturnType<typeof createUser>

// Parametrs type 
type UserParams = Parameters<typeof createUser>

// Promise //
type Robot = {
  id: number;
  name: string;
}

type Article = {
  id: number,
  name: string,
}
async function fetchData<T>(url: string): Promise<T[]> {
  const re = await fetch(url)
  const data = await re.json() as T[]
  return data;
}

const robotData: Robot[] = await fetchData<Robot>("https://jsonplaceholder.typicode.com/users")

console.log(robotData)

// lower the object ot the type
const lowerData: Robot[] = robotData.map((item: Robot)=>{
  return {id: item.id, name: item.name}
})