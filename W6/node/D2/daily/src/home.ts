const homeForm = document.forms[0] as HTMLFormElement
const playerName = document.querySelector(".player-name") as HTMLInputElement

homeForm.addEventListener("submit", async (event)=>{
    event.preventDefault()
    const name = playerName.value
    localStorage.setItem("name", name);

    const response = await fetch("http://localhost:5000/adduser", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name: name}),
    })
    const data = response.json()
    console.log(data)
    window.location.href = 'http://localhost:5000/play/index.html'
})