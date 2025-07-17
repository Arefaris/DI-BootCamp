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