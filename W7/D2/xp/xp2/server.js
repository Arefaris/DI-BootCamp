import express from "express"
import {router} from "./routes/postsRoute.js"

const app = express()
const PORT = 5000

app.use(express.json())

app.use("/api/", router)

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, ()=>{
    console.log("listening on a port" + PORT)
})