let block = document.getElementById("animate")

function myMove(){
    let amount = 0;
    let myInt = setInterval(()=>{
        amount += 1
        if (amount === 350){
            clearInterval(myInt)
        }
        block.style.left = amount + "px"
    }, 100)
}