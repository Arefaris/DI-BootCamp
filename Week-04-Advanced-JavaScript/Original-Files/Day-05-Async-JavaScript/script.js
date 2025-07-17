// ** fetch //
//returns promise
// response.json()
// response.text()
//second parameter is optional
fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET"
})
// getting a response
.then (res => {
    //converting to object
    return res.json()
})
.then(data => {
    console.log(data)
})
.catch((e) => {
    console.log(e)
})

// XML example
// fetch("https://jsonplaceholder.typicode.com/users")
// // getting a response
// .then (res => {
//     //converting to text
//     return res.text()
// })
// .then(data => {
//     console.log(data)
// })
// .catch((e) => {
//     console.log(e)
// })

//exercise
let form = document.querySelector("form")
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    let input = event.target.id.value
    
    fetch(`https://jsonplaceholder.typicode.com/users/${input}`)
// getting a response
.then (res => {
    //converting to object
    return res.json()
})
.then(data => {
    let name = data.name
    let userName = data.username
    document.querySelector("#root").textContent = JSON.stringify(name + userName)
})
.catch((e) => {
    console.log(e)
})
})

// options to send fetch request */
const URL = "https://jsonplaceholder.typicode.com/posts"

fetch(URL, {
    method: "POST",
    headers: {
        "Content-type:": "application/json"
    }, 
    body: JSON.stringify({
        title: "my abc",
        body: "bla bla",
        userId: 4,
    })
})
.then(res => res.json())
.then(post => console.log(post))


