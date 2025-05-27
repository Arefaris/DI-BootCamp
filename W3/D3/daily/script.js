let form = document.forms[0]
let noun = form.noun;
let adjective = form.adjective;
let person = form.person;
let verb = form.verb;
let place = form.place;


let storie = document.querySelector("#story")
let button = document.querySelector("#lib-button")
let shuffleButton = document.querySelector("#shuffle-button")

button.addEventListener("click", (event)=>{
    event.preventDefault()
    if (noun.value && adjective.value && person.value && verb.value && place.value){
        story.textContent = gen_story(noun, adjective, person, verb, place)

    }else{
        alert("missing values!")
    }
})

shuffleButton.addEventListener("click", (event)=>{
    event.preventDefault()
    if (noun.value && adjective.value && person.value && verb.value && place.value){
        story.textContent = gen_story(noun, adjective, person, verb, place)

    }else{
        alert("missing values!")
    }
})

function gen_story(noun, adjective, person, verb, place){

const stories = [
  `A ${adjective.value} ${noun.value} ${verb.value} with ${person.value} at the ${place.value}.`,
  `${person.value} found a ${adjective.value} ${noun.value} in the ${place.value} and ${verb.value} it.`,
  `In the ${place.value}, a ${adjective.value} ${noun.value} ${verb.value} next to ${person.value}.`,
  `${person.value} saw a ${adjective.value} ${noun.value} ${verb.value} across the ${place.value}.`,
  `The ${adjective.value} ${noun.value} made ${person.value} ${verb.value} at the ${place.value}.`,
  `${person.value} ${verb.value} a ${adjective.value} ${noun.value} near the ${place.value}.`,
  `A ${adjective.value} ${noun.value} ${verb.value} when ${person.value} entered the ${place.value}.`,
  `${person.value} and a ${adjective.value} ${noun.value} ${verb.value} through the ${place.value}.`,
  `At the ${place.value}, ${person.value} ${verb.value} a ${adjective.value} ${noun.value}.`,
  `A ${adjective.value} ${noun.value} ${verb.value} while ${person.value} walked in the ${place.value}.`
];

return stories[Math.floor(Math.random() * 10)]
}