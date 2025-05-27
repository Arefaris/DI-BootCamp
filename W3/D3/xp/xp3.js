
let allBoldItems = document.getElementsByTagName("strong")
function getBoldItems(){
    
    highlight(allBoldItems, "blue")
}

function highlight(items, color){
    for (let item of items){
        item.style.color = color
    }
}

function returnItemsToDefault(){
    highlight(allBoldItems, "black")
}


for (let item of allBoldItems){

    item.addEventListener("mouseover", ()=>{
        getBoldItems()
    })

    item.addEventListener("mouseout", ()=>{
        returnItemsToDefault()
    })

}

