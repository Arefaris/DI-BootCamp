import { Router } from "express";
import { getQuiz, score, answerQuiz} from "../controllers/quiz.js";

export const router = Router()

router.get("/quiz", getQuiz)
router.get("/score", score)
router.post("/quiz", answerQuiz)