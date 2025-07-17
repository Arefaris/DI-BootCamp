let container = document.querySelector("#container")
console.log(container)
let ul_list = document.querySelector(".list")
ul_list.children[1].textContent = "Richard"

let all_uls = document.getElementsByTagName("ul")
all_uls[1].children[1].remove()

// for (let name of all_uls[0].children){
//     name.textContent = "Vladislav"
// }
all_uls[1].classList.add("student_list")
all_uls[0].classList.add("student_list")

container.style.backgroundColor = "lightblue"
container.style.padding = "5px"
all_uls[1].children[1].style.display = "none"
all_uls[0].children[1].style.border = "solid"
document.body.style.fontSize = "19px"

