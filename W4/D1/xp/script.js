//ex1
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((color, index) => {
//     console.log(`${index+1}# choise is ${color}`)
// })


// if (colors.find(color => color === "Violet")){
//     console.log("Yeah")
// }else {
//     console.log("No...")
// }


//ex2
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
  const i = index + 1;
  const suffix = (i % 100 >= 11 && i % 100 <= 13) 
    ? ordinal[0] 
    : (i % 10 === 1) 
      ? ordinal[1] 
      : (i % 10 === 2) 
        ? ordinal[2] 
        : (i % 10 === 3) 
          ? ordinal[3] 
          : ordinal[0];

  console.log(`${i}${suffix} choice is ${color}.`);
});


//ex 3
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
[ 'bread', 'carrot', 'potato', 'chicken', 'apple', 'orange' ]
const country = "USA";
console.log([...country]);
[ 'U', 'S', 'A' ]
let newArray = [...[,,]];
[ undefined, undefined ]
console.log(newArray);

// ex 4
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


const welcomeStudents = users.map(user => `Hello ${user.firstName}`)
const fullStak = users.filter(user => user.role === "Full Stack Resident")
const lastNames = users.filter(user => user.role === "Full Stack Resident").map(user => user.lastName)
console.log(fullStak, lastNames)

// ex 5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let epicString = epic.reduce((prev, current) => prev + " " + current)
console.log(epicString)

// ex 6
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

students.filter((student) => student.isPassed).forEach((student)=> console.log(`Congratulations ${student.name} you passed ${student.course}`))

