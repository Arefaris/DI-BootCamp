//**walking throw the DOM */

//** id */
const root = document.getElementById("root")
console.log(root)

root.style.backgroundColor = "yellow"
//root.textContent = "the dom tree"

const headerH2 = document.getElementById("header2")
headerH2.textContent = "welcome"
console.log(headerH2)

/** tag name */
const divs = document.getElementsByTagName("div")
console.log(divs)

// ** class name */

const h2css = document.getElementsByClassName("divcss")
console.log(h2css)

const body = document.body
console.log(body)

// ** querySelector - naming of css property #id .class h2 */

const _root = document.querySelector("#root")
console.log(_root)

const _div = document.querySelector("div")
console.log(_div)

const_divs = document.querySelectorAll("div.divcss")
console.log(const_divs)

/* add element to the dom */
const myPtag = document.createElement("p")
myPtag.innerText = "lorom epsum dolor sit amet"
const mainDiv = document.getElementById("main");
mainDiv.appendChild(myPtag)

let users = [
    {id:1, name: "john", email: "jj@gmail.com"},
    {id:2, name: "marie", email: "jaj@gmail.com"},
    {id:3, name: "stive", email: "jjv@gmail.com"}
]





function addUserDom(){
    const usersDiv = document.querySelector(".users")
    for (let user in usersDiv){
        const div = document.createElement("div")
        const h2 = document.createElement("h2")
        h2.textContent = usersDiv[user].name
        p.textContent = usersDiv[user].name
}
}