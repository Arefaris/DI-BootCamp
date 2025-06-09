// 1. Create an HTML form in your index.html file with inputs for name, 
// username, and email, and a submit button.
// 2. When the form is submitted, send a POST request to 
// https://users-18kl.onrender.com/userjson 
// as a JSON data with the name, username, and email
// 3. Display the names on the page from id 14 include.
// 

let form = document.querySelector("form")

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    let name = event.target.name.value
    let username = event.target.username.value
    let email = event.target.email.value
    console.log(name, username, email)

    const URL = "https://users-18kl.onrender.com/userjson"

fetch(URL, {
    method: "POST",
    headers: {
        "Content-type:": "application/json"
    }, 
    body: JSON.stringify({
        name: name,
        username: username,
        email: email,
    })
})
.then(res => res.json())
.then(post => console.log(post))
})