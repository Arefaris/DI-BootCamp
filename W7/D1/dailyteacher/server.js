import express from "express";
import { emojis } from "./models/emojis.js";
import path from "path"

const app = express();

//to choose port from env
const PORT = process.env.PORT || 3001

const __dirname = path.resolve()
// body-parser
app.use(express.json())

// static files
app.use("/", express.static(__dirname + '/public'))



const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

app.get("/play", (req, res) => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndex];
  const shuffleEmojis = shuffleArray(emojis);
  res.json({ randomEmoji, shuffleEmojis });
});

let score = 0;
app.post('/guess', (req, res)=> {
    const  {hint, guess} = req.body
    if(hint === guess){
        score++
        res.json({msg: "correct"})
        return
    }else {
        res.json({msg: "C"})
    }
})

app.listen(PORT, ()=>{
    console.log(`Run on ${PORT}`)
})