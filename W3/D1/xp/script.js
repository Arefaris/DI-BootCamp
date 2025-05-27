//part 1
let people = ["Greg", "Mary", "Devon", "James"];

people.shift();
people[people.indexOf("James")] = "Jason";
people.push("Yourname");

console.log(people.indexOf("Mary"));

let peopleCopy = people.slice(1, 3);

console.log(people.indexOf("Foo"));

let last = people[people.length - 1];
console.log(last);

//part 2
for (let person of people) {
  console.log(person);
}

for (let person of people) {
  console.log(person);
  if (person === "Devon") break;
}

//ex2
const colors = ["blue", "red", "green", "black", "white"];
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

//ex3 
let num;
do {
  num = prompt("Enter a number");
} while (Number(num) < 10);

//ex4

const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);

let total = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
if (total > building.numberOfRoomsAndRent.dan[1]) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}

//ex5
const family = { dad: "John", mom: "Jane", son: "Mike" };

for (let key in family) {
  console.log(key);
}

for (let key in family) {
  console.log(family[key]);
}

//ex6
const details = { my: 'name', is: 'Rudolf', the: 'reindeer' };
let sentence = "";

for (let key in details) {
  sentence += key + " " + details[key] + " ";
}
console.log(sentence.trim());


//ex7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const secretName = names.map(name => name[0]).sort().join('');
console.log(secretName); // "ABJKPS"
