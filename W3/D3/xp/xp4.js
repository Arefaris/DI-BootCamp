let form = document.forms[0]

let radius = form.radius;
let volume = form.volume;
let submit = form.submit

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log(e)
    if (radius){
        volume.value = (4 / 3) * Math.PI * Math.pow(radius.value, 3)
    }
})