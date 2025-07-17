console.log(window)
function btnClick(e){
    console.log(e)
    console.log("button was clicked")
    e.target.style.backgroundColor = "yellow"
    e.target.style.display = "none"
}

function getValueFromInput(e){
    console.log(e)
    const inpt = document.querySelector("input")
    console.log(inpt.value)
}

function changeHeaderOnMouseOver(e){
    e.target.style.color = "red"

}

function changeHeaderOnMouseLeave(e){
    e.target.style.color = "black"
}

const btn = document.getElementById("btn")
// btn.addEventListener("click", function(event){
//     console.log(event.target)
//     changeColor(event.target, "pink")
// })


const changeColor = (elem, color) => {
    elem.style.backgroundColor = color
}

const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.fname.value)
}

const div1 = document.getElementById("div1")
const div2 = document.getElementById("div2")
const btn1 = document.getElementById("btn1")

console.log(div1, div2, btn1)
// second argument is order
div1.addEventListener("click", (e)=>{
    console.log("div1 was clicked")
},)

div2.addEventListener("click", (e)=>{
    console.log("div2 was clicked")
},)

btn1.addEventListener("click", (e)=>{
    console.log("btn1 was clicked")
    e.stopPropagation()
},)