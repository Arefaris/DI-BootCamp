import express from "express"
import { userRouter } from "./routes/userRouter.js"

const app = express()

const PORT = 5000

app.use(express.json())

app.use("/", userRouter)

app.listen(PORT, ()=>{
    console.log("listening on " + PORT)
})