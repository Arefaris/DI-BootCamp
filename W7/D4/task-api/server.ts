import e from "express";
import {userRouter} from "./routes/userRoutes.ts"
const app = e()
const PORT = process.env.PORT || 5000

app.use(e.json())
app.use("/",userRouter)

app.listen(PORT, ()=>{
    console.log("Running on port: " + PORT)
})