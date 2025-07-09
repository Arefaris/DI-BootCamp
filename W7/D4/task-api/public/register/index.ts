const registerForm = document.querySelector("form") as HTMLFormElement
const result = document.querySelector(".result") as HTMLDivElement

registerForm.addEventListener("submit", async (event)=>{
    event.preventDefault()
    const elements = registerForm.elements
    const firstname = elements.namedItem("name") as HTMLInputElement;
    const lastName = elements.namedItem("lastName") as HTMLInputElement;
    const email = elements.namedItem("email") as HTMLInputElement;
    const username = elements.namedItem("username") as HTMLInputElement;
    const password = elements.namedItem("password") as HTMLInputElement;

    const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstname: firstname.value,
            lastname: lastName.value,
            email: email.value,
            username: username.value, 
            password: password.value
        })
    })

    const data = await response.json()
    
    if (data.status == 200){
        result.textContent = data.message
    }else if (data.status == 409){
        result.textContent = "Username already exists"
    }else {
        result.textContent = "Something went wrong. Server responded with status: " + data.status
    }

})