function winBattle(){
    return true;
}

const _win = () => true
console.log(_win())

let experiencePoints = _win() ? 10 : 1

console.log(experiencePoints)


const isString = (string) => typeof(string) === "string" ? true : false
console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false

const sum = (num1, num2) => num1 + num2
console.log(sum(2, 2))

function to_grams(kg) {
    return kg * 1000
}

console.log(to_grams(5))

const to_Grams_Expression = function(kg) {
  return kg * 1000;
};

console.log(to_Grams_Expression(6))

const _to_grams = kg => kg * 1000

console.log(_to_grams(2))