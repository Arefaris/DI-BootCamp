const emojiEL = document.querySelector(".emoji") as HTMLDivElement
const buttons = document.querySelectorAll(".answer-btn")
const form = document.forms[0] as HTMLFormElement
const score = document.querySelector(".score") as HTMLDivElement
const result = document.querySelector(".result") as HTMLDivElement
const userName = localStorage.getItem("name");
interface serverResponse {
    emoji: string,
    guesses: string[]
}

interface serverResponsePost {
    correct: string,
    score: number,
    answer: string
}

const getEmoji = async () =>{
    const response = await fetch("http://localhost:5000/start", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name: userName}),
    })
    
    const data: serverResponse = await response.json()
    return data
}

const render = async () => {
    const data = await getEmoji()
    emojiEL.textContent = data.emoji
    
    for (let i=0; i < data.guesses.length; i++) {
        const input = buttons[i] as HTMLInputElement
        input.value = data.guesses[i]

    }
}

const sendGuess = async (word: string)=> {

   const response = await fetch("http://localhost:5000/emojis", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({guess: word, name: userName}),

    })
    const data: serverResponsePost = await response.json()
    return data
}

const attachEvents = ()=> {
    form.addEventListener("submit", async (event)=>{
        event.preventDefault()
        const input = event.submitter as HTMLInputElement
        const response = await sendGuess(input.value)
        score.textContent = "Score: " + String(response.score)
        
        if (response.correct){
            result.classList.remove("wrong-guess")
            result.classList.add("right-guess")
            result.textContent = "You guessed right! :)"
        }else {
            result.textContent = "Wrong guess! :("
            result.classList.remove("right-guess")
            result.classList.add("wrong-guess")
        }

        render()
    })
}



render()
attachEvents()
