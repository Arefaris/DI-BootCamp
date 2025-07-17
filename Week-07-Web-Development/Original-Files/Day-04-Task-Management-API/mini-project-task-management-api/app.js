import express from "express"
import { tasksRouter } from "./routes/tasksRoutes.js"

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())

app.use("/", tasksRouter)

app.listen(PORT, ()=>{
    console.log("Listenin on port" + PORT)
})