// Тема 1: static в классах
// 📘 Что такое static?
// static — это ключевое слово, которое позволяет создавать свойства и методы, принадлежащие самому классу, а не его экземплярам (объектам).

// Когда ты создаёшь объект через new, он получает доступ к обычным свойствам класса.

// А вот static-свойства и методы — общие для всех объектов и живут прямо в классе, а не в каждом объекте отдельно.

//  Пример:

class Student {
  static count: number = 0;

  static getCount(): number {
    return Student.count;
  }

  name: string;
  id: number;

  constructor(name: string) {                                                                           
    this.name = name;
    this.id = ++Student.count;                  
  }
}

const std1 = new Student("John");
const std2 = new Student("Anne");
const std3 = new Student("Dan");

// console.log(std1.id); // 1
// console.log(std2.id); // 2
// console.log(std3.id); // 3

// console.log(Student.getCount()); // 3 — общее количество студентов


// 🔍 Что происходит:
// Student.count — общее число студентов, одно значение на весь класс.

// Student.getCount() — метод класса (не объекта), который возвращает count.

// this.id = ++Student.count; — при создании каждого студента счётчик увеличивается, и студенту присваивается уникальный id.

// ✅ Упражнения:
// Задание 1:
// Создай класс Car, в котором будет:

// static totalCars — число машин.

// При каждом создании новой машины totalCars увеличивается.

// Метод Car.getTotalCars() возвращает общее количество машин.

class Car{
    static totalCars = 0
    brand: string

    constructor(brand: string){
        this.brand = brand
        Car.totalCars++
    }

    static getTotalCars(){
        return Car.totalCars
    }
}

const car1 = new Car("Toyota")
const car2 = new Car("Mazda")
console.log(Car.getTotalCars()) // 2

//  Тема 2: Index Signature (Индексная сигнатура)
// 📘 Что это такое?
// Иногда ты хочешь, чтобы объект принимал любые ключи, но при этом имел обязательные свойства.

// Например:


 interface Employe {
   [key: string | number]: string | number;
    name: string;   
    age: number;
    role: string;
 }

// Объяснение:
// [key: string | number]: string | number — означает: в объекте могут быть любые ключи, которые будут строками или числами, и значения у них — тоже строки или числа.

// Но обязательно должны быть name, age, role.

const employee: Employe = {
  name: "John",
  age: 30,
  role: "dev",
  salary: 5000, // допустимо!
  department: "IT", // допустимо!
}

// Цикл for...in:
// Позволяет пройтись по всем ключам объекта:

for (const key in employee) {
  console.log(key, employee[key]); // нужно привести ключ
}

interface Book {
    [key: string] : string | number
    title: string,
    author: string,
    year: number
}

const book1: Book = {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian",
    pages: 328
}

for (const key in book1){
    console.log(key, book1[key as keyof Book])
}

//  Подведём итог по теме Index Signature:
// Позволяет объекту иметь дополнительные ключи, помимо указанных явно.

// Полезна, когда ты не знаешь все ключи заранее.

// Подходит для описания API-ответов, форм и т.п.




//🔹 Что такое "Dynamic Key Access"?
// Обычно ты обращаешься к полям объекта так:
// console.log(EmployeJohn.name);
// Но иногда имя поля приходит из переменной, и тогда ты обращаешься вот так:
// const prop = "name";
// console.log(EmployeJohn[prop]); // <-- доступ через переменную
// Почему это важно?
// Это динамическое обращение к полю. Оно используется, когда:

// Ты не знаешь заранее, какой именно ключ будет использоваться.

// Ты получаешь имя поля от пользователя или из формы.

// Ты перебираешь объект в цикле.

interface Movie {
    title: string,
    year: number,
    rating: number
}

let fieldName = "rating"

const movie1: Movie = {
    title: "Harry potter",
    year: 2001,
    rating: 10
}

console.log(movie1[fieldName as keyof Movie])


/// Что такое Record в TypeScript?
// Тип Record — это встроенный дженерик, который позволяет создавать типы объектов с:

// фиксированными ключами,

// и одним и тем же типом значений для всех ключей.

// 📘 Синтаксис:
// Record<Keys, Type>

//Keys — перечисление ключей (string, "name" | "age", number и т.д.)

//Type — тип значения для каждого ключа.


type settings = "volume" | "brightness" | "contrast"

type values = Record<settings, number>


let screenSettings: values = {
    volume: 15,
    brightness: 12,
    contrast: 10
}

const settingName = "volume"

console.log(screenSettings[settingName])


//Generics
//  Что такое Generics?
// Generics позволяют создавать функции, интерфейсы и типы, которые работают с разными типами данных, но при этом сохраняют типовую безопасность.

// 💬 Другими словами:

// "Я не знаю, с каким типом ты хочешь работать, но когда узнаю — буду его строго соблюдать."

function echo<T>(value: T): T {
  return value;
}

// Использование:

echo<string>("hello") // TypeScript знает: это строка
echo<number>(123)
// Можно и без <string> — TypeScript сам выведет тип:

const a = echo("hi")  // string
const b = echo(42)    // number

//упражнения 

const reverseArray = <T>(value: T[]): T[]=>{
    return value.reverse()
}

console.log(reverseArray(["a", "b", "c"])) // → ["c", "b", "a"]
console.log(reverseArray([1, 2, 3]))       // → [3, 2, 1]


interface ApiResponse<T> {
    succes: boolean,
    data: T;
}

const ApiResponse: ApiResponse<string> = {
    succes: true,
    data: "some data"
}

const ApiResponse1: ApiResponse<number[]> = {
    succes: false,
    data: [1,2,3]
}

// Отлично! 🚀 Переходим к нескольким дженерикам одновременно.

// Ты уже видел пример:


const mergeArray = <T, K, Z>(arr1: T[], arr2: K[], arr3: Z[]): (T | K | Z)[] => {
  return [...arr1, ...arr2, ...arr3]
}

// 🔷 Что здесь происходит?
// 📌 <T, K, Z>
// Ты создаёшь несколько параметров типов, а не один:

// T — тип элементов первого массива

// K — тип элементов второго массива

// Z — тип элементов третьего массива

// Это как если бы ты говорил:
// «Эта функция работает с тремя массивами: один с яблоками 🍎, другой с апельсинами 🍊, третий с бананами 🍌 — и она объединяет их всех в один ящик».

const combineObjects = <T, K>(obj1: T, obj2: K): T & K=>{
    return {...obj1, ...obj2}
}

const obj1 = { name: "Alice" }
const obj2 = { age: 30 }

const combined = combineObjects(obj1, obj2)
console.log(combined) 


/**
 * Create a function isObj - get a generic type as parameter (arg: T)
 * retrun type { arg, is: true/false}
 */

const isObj = <T>(arg: T)=> {
     if(typeof arg === "object"){
        return {arg, is: true}
     }else {
        return {arg, is: false}
     }
}


console.log(isObj(a))

// ✅ 1. Статические свойства и методы в классах
// static принадлежит самому классу, а не объекту.

// Пример: считать, сколько создано объектов.

// Упражнение: ты сделал Car.getTotalCars() — отлично!

// ✅ 2. Index Signature (динамические ключи в интерфейсах)
// [key: string]: string | number — интерфейс с произвольными ключами.

// Позволяет обходить объекты через for...in.

// ✅ 3. Dynamic Key Access
// Когда имя свойства — переменная.

// Пример: obj[prop as keyof Type]

// ✅ 4. Record тип
// Record<K, V> позволяет создать объект с ограниченными ключами и конкретным типом значений.

// Использовал для volume, brightness, contrast с числом от 0 до 100.

// ✅ 5. Generics — дженерики
// <T> позволяет сделать функцию, работающую с любым типом.

// Пример: reverseArray<T>(arr: T[]): T[]

// У тебя теперь нет страха перед <T> 💪

// ✅ 6. Интерфейс с дженериком
// interface ApiResponse<T> — структура данных, где data может быть любым типом.

// Пример: ApiResponse<string>, ApiResponse<number[]>

// ✅ 7. Несколько дженериков
// <T, K> — когда функция работает с несколькими типами.

// Пример: combineObjects<T, K>(obj1: T, obj2: K): T & K

