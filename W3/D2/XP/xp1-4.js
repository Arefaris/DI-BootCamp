
// ex1
function displayNumbersDivisible(divisor){
    let numbers = []
    let value = 0
    for (let i=0; i <= 500; i++){
        if (i % divisor === 0){
            numbers.push(i)
            value += i
        }
        
    }
    console.log("Outcome: " + numbers.join(" ") +"\nSum: " + value)
}
displayNumbersDivisible(45)

//ex 2
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

let shoppingList = ["banana", "orange", "apple"]

function myBill(){
    let bill = 0
    for (item in shoppingList){
        if (stock[shoppingList[item]] > 0){
            stock[shoppingList[item]] -= 1
            bill += prices[shoppingList[item]]
        }

    }
    console.log(bill)
    console.log(stock) 
}

myBill()

//ex 3
// 
//** 
// A quarters is 0.25
//A dimes is 0.10
//A nickel is 0.05
//A penny is 0.01
// 
// 
// 
//  */

function changeEnough(itemPrice, amountOfChange){
    let quarters = 0.25 * amountOfChange[0] 
    let dimes =  0.10 * amountOfChange[1]
    let nickels = 0.05 * amountOfChange[2] 
    let pennys = 0.01 * amountOfChange[3] 

    let sum = quarters + dimes + nickels + pennys
    if (itemPrice < sum){
        return true
    }else {
        return false
    }
}
console.log(changeEnough(4.25, [25, 20, 5, 0]))
console.log(changeEnough(14.11, [2,100,0,0]))
console.log(changeEnough(0.75, [0,0,20,5]))


// ex 4
function hotelCost(){
    let nights
    do {
        nights = prompt("How many nights?")
    }while (isNaN(nights) || nights == null ||  nights == 0) 
    
    return 140 * nights
}


function planeRideCost(){
    let destination
    while (true){
        destination = prompt("Destination?")
        if (isNaN(destination) && destination){
            break
        }
    }
    if (destination == "London"){
            return 183
        }else if(destination == "Paris"){
            return 220
        }else {
            return 300
        }
}




function rentalCarCost(){
    let days 
    
    while (true){
        days = prompt("For how many days would you like to rent a car?")
         if (!isNaN(days) && days && days != 0){
            break
        }
        
    }

    if (days > 10){
            return days * 38
        }else {
            return days * 40
        }
        
}


function totalVacationCost(){
    hcost = hotelCost()
    plane_cost = planeRideCost()
    car_cost = rentalCarCost()
    console.log(`The car cost: ${car_cost}, the hotel cost: ${hcost}, the plane tickets cost: ${plane_cost}.`)
}

//totalVacationCost()
