setTimeout(()=>{
    alert("hello world")
}, 2000)

setTimeout(()=>{
    let cont = document.querySelector("#container")
    let p = document.createElement("p")
    p.textContent = "Hello World"
    cont.appendChild(p)
}, 2000)


const myInterval = setInterval(()=>{
    let cont = document.querySelector("#container")
    let p = document.createElement("p")
    p.textContent = "Hello World"
    cont.appendChild(p)
    
    if(cont.childElementCount == 5)
        clearInterval(myInterval);
    }, 2000)

let btn = document.querySelector("#clear")
btn.addEventListener("click", ()=>{
        clearInterval(myInterval);
    })