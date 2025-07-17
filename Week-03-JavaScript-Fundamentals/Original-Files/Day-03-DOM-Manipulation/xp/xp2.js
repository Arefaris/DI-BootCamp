let form = document.forms[0]
console.log(form.elements.fname)
console.log(form.elements.lname)
console.log(form.elements.firstname)
console.log(form.elements.lastname)
let submit_btn = form.elements.submit

submit_btn.addEventListener("click", (e)=>{
    e.preventDefault() // we using prevent default to prevent default behaviour of button.
    // like refreshing the page and sending value of inputs to adress bar
    let input1 = form.elements.firstname.value
    let input2 = form.elements.lastname.value
    let input1_li_el = document.createElement("li")
    let input2_li_el = document.createElement("li")
    input1_li_el.textContent = input1
    input2_li_el.textContent = input2
    document.querySelector(".usersAnswer").appendChild(input1_li_el)
    document.querySelector(".usersAnswer").appendChild(input2_li_el)
})