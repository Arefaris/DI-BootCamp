import e from "express";

const app = e()
const PORT = process.env.PORT || 5000

app.use(e.json())

app.listen(PORT, ()=>{
    console.log("Running on port: " + PORT)
})