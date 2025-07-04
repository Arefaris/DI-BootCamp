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

let correctAnswer: string
let score: number = 0

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

app.get("/emojis", (req: Request, res: Response) => {

    const answerArray = getAnswer(emojis)
    const fakes = getFake(fakeEmojiNames)

    fakes.push(answerArray.name)

    correctAnswer = answerArray.name

    res.json({
        emoji: answerArray.emoji,
        guesses: shuffle(fakes)
    })

})


app.post("/emojis", (req: Request, res: Response)=>{
  
    if (!req.body){
         res.status(400).json({message: "Bad Request: Body was not provided"})
    }else {
        let {guess} = req.body
        guess = guess.toLowerCase()

        if(!guess) {
            res.status(400).json({message: "Bad Request: Guess was not provided"})
        } else {

            if (guess === correctAnswer) {

                score++
                res.send({
                    correct: true,
                    score: score,
                    answer: correctAnswer
                })

            }else {

                score = 0
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