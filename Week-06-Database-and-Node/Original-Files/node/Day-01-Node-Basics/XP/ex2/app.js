import { people } from "./data.js";

const average = (people)=>{
    let total = 0
    
    for(let person of people){
        total += person.age
    }
    
    return total / people.length
}

console.log(average(people))