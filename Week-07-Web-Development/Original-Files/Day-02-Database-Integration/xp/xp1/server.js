import express from "express"
import {router} from "../xp1/routes/postsRoute.js"

const app = express()
const PORT = 3000

app.use(express.json())




// const rows = await db.raw(`CREATE TABLE IF NOT EXISTS posts (
//     id SERIAL PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     content TEXT)`)

app.use("/", router)

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, ()=>{
    console.log("listening on a port" + PORT)
})