//** get element / s */
// innerHTML / innerText / textContent
// attributes

const img = document.querySelector("img");
console.log(img)
img.src = "https://developers.institute/wp-content/uploads/2023/11/img_main.png"
img.width = "200"
img.style.border = "1px solid red"

// setattribute / getAttribute

let imgSrc = img.getAttribute("src")
console.log(imgSrc)

img.setAttribute("class", "box")

/** children */
const root = document.getElementById("root")
console.log(root.children[0].textContent = "hello")
console.log(root.firstElementChild)
console.log(root.parentNode)
const h2 = root.children[0]
console.log(h2.nextElementSibling)

// forms
let body = document.body
let forms = document.forms.myform
console.log(forms)
console.log(forms.elements.firstname)


//** removeChild */
//root.removeChild(img)

/** replaceElement(new, old) */
// root.replaceChild(img, h2)