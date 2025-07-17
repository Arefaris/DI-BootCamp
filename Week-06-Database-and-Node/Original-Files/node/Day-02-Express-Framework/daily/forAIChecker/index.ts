//server
import express, { Request, Response } from "express"
import {emojis, fakeEmojiNames} from "./data/data.ts"

const app = express()
app.use(express.json())
app.use('/', express.static(__dirname + '/public'))
const PORT = 5000

interface emoji {
    emoji: string,
    name: string
}

interface userInLeader {
    name: string,
    score: number,
    answer?: string
}

let score: number = 0

let liderBoard: userInLeader[] = []

const shuffle = (arr: string[])=> {
    let shuffled = arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

    return shuffled
}

const getFake = (arr: string[]): string[] => {
    const fakeNames: string[] = []
    for (let i = 0; i < 2; i++){
        const rngNum: number = Math.floor(Math.random() * arr.length)
        fakeNames.push(fakeEmojiNames[rngNum].toLowerCase())
    }
    return fakeNames
}

const getAnswer = (arr: emoji[]): emoji => {
    const rngNum: number = Math.floor(Math.random() * arr.length)
    const correctAnswer = emojis[rngNum]
    return correctAnswer
}

app.post("/adduser", (req: Request, res: Response)=>{
   const {name} = req.body

   if (!name) {
        res.status(400).json({message: "Bad Request: Name was not provided"})
   }else {
        liderBoard.push({
        name: name,
        score: 0
   })
        res.status(200).json({message: "All good"})
   }
   
})

app.get("/getleaders", (req: Request, res: Response) => {
    liderBoard.sort((a, b) => b.score - a.score)
    // filtering response to not include the answer in code

    res.json(liderBoard.map((user)=> {
        return {
            name: user.name,
            score: user.score
        }
    }))
})

app.post("/start", (req: Request, res: Response) => {
    if (!req.body){
         res.status(400).json({message: "Bad Request: Body was not provided"})
    }else {
        let {name} = req.body

        if (!name) {
            res.status(400).json({message: "Bad Request: Name was not provided"})
        }else {
            const answerArray = getAnswer(emojis)
            const fakes = getFake(fakeEmojiNames)
            fakes.push(answerArray.name)

            liderBoard.forEach((user) => {
                    if(user.name === name){
                        user.answer = answerArray.name
                    }})

            res.json({
                emoji: answerArray.emoji,
                guesses: shuffle(fakes)
            })
        }
       

}})


app.post("/emojis", (req: Request, res: Response)=>{
    
    if (!req.body){
         res.status(400).json({message: "Bad Request: Body was not provided"})
    }else {
        let {guess, name} = req.body
        guess = guess.toLowerCase()

        if(!guess || !name) {
            res.status(400).json({message: "Bad Request: Guess or name was not provided"})
        } else {
            let correctAnswer
            // ugly but works
            liderBoard.forEach((user) => {
                    if(user.name === name){
                        correctAnswer = user.answer
                    }})

            if (guess === correctAnswer) {

                liderBoard.forEach((user) => {
                    if(user.name === name){
                        user.score = user.score + 1
                        score = user.score
                    }})

                console.log(liderBoard)   
                res.send({
                    correct: true,
                    score: score,
                    answer: correctAnswer
                })

            }else {

                liderBoard.forEach((user) => {
                    if(user.name === name){
                        user.score = 0
                        score = user.score
                    }})
                    
                res.send({
                    correct: false,
                    score: score,
                    answer: correctAnswer
                })
            }
        }
    }
    
})

app.listen(PORT, ()=>{
    console.log("Listening on a port: " + PORT)
})


//index.ts

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


//home.ts
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

//leader.ts
const leadersListEl = document.querySelector(".leader-list") as HTMLDivElement

interface user {
    name: string,
    score: number
}
const getLeaders = async ()=>{
    const response = await fetch("http://localhost:5000/getleaders")
    const data: user[] = await response.json()
    return data
}

const renderLeader = async()=> {
    const leaders = await getLeaders()
    leaders.forEach((user)=>{

        const userContainer = document.createElement("div")
        const userNameContainer = document.createElement("div")
        const userScoreContainer = document.createElement("div")

        userContainer.classList.add("user-row")
        userNameContainer.classList.add("user-name")
        userScoreContainer.classList.add("user-score")

        userNameContainer.textContent = user.name
        userScoreContainer.textContent = String(user.score)
        userContainer.appendChild(userNameContainer)
        userContainer.appendChild(userScoreContainer)
        leadersListEl.appendChild(userContainer)
    })
}

renderLeader()