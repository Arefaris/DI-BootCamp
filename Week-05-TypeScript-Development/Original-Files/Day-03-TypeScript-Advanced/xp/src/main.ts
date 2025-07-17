class Employee {
    constructor(private name: string, private salary: number, public position: string, protected department: string){
        this.name = name
        this.salary = salary
        this.position = position
        this.department = department
    }

    getEmployeeInfo(): string[]{
        return [this.name, this.position]
    }
}

let bob = new Employee("john", 124, "teacher", "school")
console.log(bob.getEmployeeInfo())

class Product{
    readonly id: number;
    public name: string;
    public price: number;

    constructor(id: number, name: string, price: number){
        this.id = id
        this.name = name
        this.price = price
    }

    getProductInfo(): string{
        return this.name + " " + this.price
    }
}

let milk = new Product(56, "korovka", 15)
// console.log(milk.getProductInfo())
//Cannot assign to 'id' because it is a read-only property.
//milk.id = 125

class Animal {
    public name;

    constructor(name: string){
        this.name = name
    }

    makeSound(): string{
        return "default sound"
    }

}

class Dog extends Animal {
    constructor(name: string){
        super(name)
    }

    makeSound(): string {
        return "bark"
    }
}

let charly = new Dog("charly")
console.log(charly.makeSound())

class Calculator {
    static add(a: number, b:number): number {
        return a + b
    }

    static subtract(a: number, b: number): number {
        return a - b
    }
}

Calculator.add(1, 2)
Calculator.subtract(5, 2)


interface User {
    readonly id: number;
    name: string,
    email: string
}

interface PremiumUser extends User {
    membershipLivel?: string
}

const userJohn: PremiumUser =  {
    id: 25,
    name: "bob",
    email: "myEmail.com",
    membershipLivel: "exclusive"
}

const printUserDetails = (PremiumUser: PremiumUser)=>{
    
    console.log(PremiumUser.name, PremiumUser.email, PremiumUser.membershipLivel)
}
printUserDetails(userJohn)