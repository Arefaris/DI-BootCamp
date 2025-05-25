const people = ["Greg", "Mary", "Devon", "James"];

// part 1
// 1
greg = people.shift()
console.log(greg);
console.log(people);

// 2
people[2] = "Jason"
console.log(people);

// 3

people.push("Vladislav")
console.log(people);

// 4
console.log(people.indexOf("Mary"))

// 5

let new_people = people.slice(1,3)
console.log(new_people)

// 6
console.log(people.indexOf("Foo")) // it returns - 1 because the value is not in the array

// 7
let last = people[people.length - 1]
console.log(last)

// part 2
for (let i=0; i < people.length; i++){
    //1
    console.log(people[i])

    //2
    if (people[i] === "Devon"){
        break
    }
}

// Ex 2

const colors = ["black", "yellow", "red", "blue", "green"]
const suffixes = ["st", "nd", "rd", "th", "th"]
for (i=0; i < colors.length; i++){

    console.log(`My #${i+1}${suffixes[i]} choise is ${colors[i]}`)
}

// Ex 3
// let user_input = prompt("Number?")

// while (user_input < 10){
//     user_input = prompt("Number?")
// }

// ex 4

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors)
console.log(building.numberOfAptByFloor.firstFloor)
console.log(building.numberOfAptByFloor.secondFloor)
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0] )

let sara_rent = building.numberOfRoomsAndRent.sarah[1];
let david_rent = building.numberOfRoomsAndRent.david[1];
let dan_rent = building.numberOfRoomsAndRent.dan[1];

if (sara_rent + david_rent > dan_rent){
    building.numberOfRoomsAndRent.dan[1] += 200
}

console.log(building.numberOfRoomsAndRent.dan[1])

// ex 5
let family = {
    dad: "bob",
    mom: "patrisha",
    grandad: "michael"
}

for (const member in family){
    console.log(member)
    console.log(family[member])
}


// ex 6
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

for (const detail in details){
    console.log(`${detail} ${details[detail]}`)
}

// ex 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort()

let secret_society_name = ""
for (const name of names){
    secret_society_name += name[0]
}
console.log(secret_society_name)