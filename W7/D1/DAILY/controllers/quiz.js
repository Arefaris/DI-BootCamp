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

