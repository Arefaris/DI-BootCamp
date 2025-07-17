//server.js
import express from "express";
import {router} from "./routes/trivia.js"

const app = express();


const PORT = 3000
app.use(express.json())

app.use("/", router)

app.listen(PORT, ()=>{
    console.log("listening on port" + PORT)
})

// controllers/quiz.js
import {triviaQuestions} from "../models/data.js"

let currentQuestion = {}
let userScore = 0
export const getQuiz = (req, res)=>{
    currentQuestion = triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)]
    res.json(currentQuestion.question)
}

export const score = (req, res)=>{
    res.json({score: userScore})
}

export const answerQuiz = (req, res)=>{
    const {answer} = req.body
    if(!answer){
        res.json("You didnt provide answer")
    }

    if (answer === currentQuestion.answer) {
        currentQuestion = triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)]
        userScore++
        res.json([{message: "Great! Next Question"},
            currentQuestion.question
        ])
    }else {
        res.json("Sorry your answer was wrong, please try again")
    }

}

// /models/data.js
export const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];


// routes/trivia.js
import { Router } from "express";
import { getQuiz, score, answerQuiz} from "../controllers/quiz.js";

export const router = Router()

router.get("/quiz", getQuiz)
router.get("/score", score)
router.post("/quiz", answerQuiz)
