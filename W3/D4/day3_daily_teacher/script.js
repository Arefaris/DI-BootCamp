//** get main elements */

const form = document.getElementById("libform")
const libbutton = document.getElementById("lib-button")
const storyContainer = document.getElementById("story")

console.log(form,  libbutton, storyContainer)
let currentInputs = {}
let storyTemplates = []

//** */

const shuffle = document.createElement("button")

shuffle.textContent = "Shuffle story";
form.appendChild(shuffle);

function getInputsValue(){
    return {
        noun: document.getElementById("noun").value,
        adjective: document.getElementById("adjective").value,
        person: document.getElementById("person").value,
        verb: document.getElementById("verb").value,
        place: document.getElementById("place").value

    }
}

function validateNotEmptyValues(inputs){
    for (let key in inputs){
        if (inputs[key].trim() === ""){
            return false
        }else {
            return true
        }
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const inputs  = getInputsValue()
    if (!validateNotEmptyValues(inputs)) {
        alert("Please fill in all inputs!!")
        return
    }

    console.log("all fields with values")
})


function generateStory(inputs){
    return [
        `Once upon a time ${inputs.person} went to ${inputs.place} with a very ${inputs.adjective}.
        ${inputs.verb} all day`
    ]
}

function getRandomStory(){
    if (storyTemplates === 0) return;

    const randomIndex = Math.floor(Math.random() * storyTemplates.length);
    return storyTemplates[randomIndex]
}