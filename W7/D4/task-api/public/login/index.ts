const loginForm = document.querySelector("form") as HTMLFormElement
const logiNresult = document.querySelector(".result") as HTMLDivElement

loginForm.addEventListener("submit", async (event)=>{
    event.preventDefault()

    const elements = loginForm.elements
    const login = elements.namedItem("login") as HTMLInputElement;
    const password = elements.namedItem("password") as HTMLInputElement;

    const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: login.value,
            password: password.value
        })
    })
    
    const data = await response.json()
    
    if (data.status == 200){
        logiNresult.textContent = data.message
    }else if (data.status == 401){
        logiNresult.textContent = data.message
    }else if (data.status == 404){
        logiNresult.textContent = data.message
    }else {
        logiNresult.textContent = "Something went wrong. Server responded with status: " + data.status
    }

})