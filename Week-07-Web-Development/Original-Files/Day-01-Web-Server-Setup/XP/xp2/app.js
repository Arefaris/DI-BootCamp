import express from "express";
import { router } from "./routes/todos.js";

const app = express()
const PORT = 3000
app.use(express.json());
app.use("/", router)

app.listen(PORT, ()=>{
    console.log("Listining on port: " + PORT)
})