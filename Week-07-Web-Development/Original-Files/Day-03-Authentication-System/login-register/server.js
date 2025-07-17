import express from 'express'

import userRouter from './routes/userRouter.js'

const app  = express()

app.use(express.json())

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`run on` + PORT))
app.use("/api", userRouter)