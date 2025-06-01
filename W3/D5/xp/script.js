let mainColorDiv = document.querySelector(".main-color")
let clearBtn = document.querySelector(".clear-btn")
let colors = document.getElementsByClassName("color")
let sideBar = document.querySelector(".side-bar")
let selectedColor = ""
let drawing = false

clearBtn.addEventListener("click", ()=>{
    pixelDivs = document.getElementsByClassName("pixel-div")
    for (let pixel of pixelDivs){
        pixel.style.backgroundColor = ""
        drawing = false
}       
})

sideBar.addEventListener("mouseover", ()=>{
    drawing = false
})

for (let i=0; i < 225; i++){
    let pixelDiv = document.createElement("div")
    pixelDiv.classList.add("pixel-div")
    pixelDiv.addEventListener("mousedown", ()=>{
        pixelDiv.style.backgroundColor = selectedColor
        drawing = true
    })

     pixelDiv.addEventListener("mouseup", ()=>{
        drawing = false
    })

    pixelDiv.addEventListener("mouseover", ()=>{
        if (drawing){
            pixelDiv.style.backgroundColor = selectedColor
        }
        
    })

    mainColorDiv.append(pixelDiv)
}



for (let color of colors){
  
    color.addEventListener("click", ()=>{
        selectedColor = color.style.backgroundColor
    })
    
    color.addEventListener("mouseover", ()=>{
        drawing = false
    })
}

