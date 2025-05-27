let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

console.log(h1)
let article = document.querySelector("article");
article.lastElementChild.remove()

h2.addEventListener("click", (e)=> {
    e.target.style.backgroundColor = "red"
})


h3.addEventListener("click", (e)=> {
    e.target.style.display = "none"
})

let button = document.createElement("button")
button.textContent = "Make bold!"
article.appendChild(button)

button.addEventListener("click", ()=>{
    let allps = document.getElementsByTagName("p")

    for (p of allps){
        p.style.fontWeight = "bold"
    }

})

h1.addEventListener("mouseover", (event)=>{
    event.target.style.fontSize = `${Math.floor(Math.random() * 100)}px`
})


