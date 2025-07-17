import e from "express";
import {userRouter} from "./routes/userRoutes.ts"
import path from "path"

const app = e()
const PORT = process.env.PORT || 5000

const __dirname = path.resolve()

app.use(e.json())
app.use("/api/", userRouter)

app.use("/", e.static(__dirname + "/public"))

app.listen(PORT, ()=>{
    console.log("Running on port: " + PORT)
})