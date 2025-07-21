import e from "express";
import cors from "cors"
const app = e()
import bodyParser from "body-parser"

app.use(bodyParser.json())
app.use(cors())

app.get("/api/hello", (req, res)=>{
    res.json({message: "Hello From Express"})
})

app.post("/api/world", (req, res)=>{
    const {message} = req.body
    console.log(message)
    res.json({message: `${message}`})
})    
app.listen(3000, ()=>{
    console.log("Listining on a port 3000")
})

