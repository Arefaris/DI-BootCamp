const express = require('express')
const app = express()

app.use(express.json())

const data = [{
    id: "0",
    title: "hello",
    content: "my name is borya"
}, 
{
    id: "1",
    title: "How to make money",
    content: "1. Work"
}, 
{
    id: "2",
    title: "Best food on earth",
    content: "Shaurma"
}, 
{
    id: "3",
    title: "Best AIs on the market",
    content: "Chat gpt, gemini, claude"
} ]

app.get("/posts", (req, res)=>{
    console.log(req)
    res.json(data)
})

app.get("/posts/:id", (req, res)=>{
    
    const {id} = req.params 
    const post = data.find(item => item.id === id)

    if (!post) {
        res.status(404).json({message: 'Post not found'})
    }
    res.json(post)
})

app.post('/posts', (req, res)=>{
    const {title, content} = req.body
    const newPost = {
        id: data.length + 1,
        title: title,
        content: content
    }
    data.push(newPost)
    res.json(data)
})

app.put('/posts/:id', (req, res)=> {
    const {id} = req.params
    const {title, content} = req.body
    data.forEach((post)=> {
        if (post.id === id){
            post.title = title,
            post.content = content
        }
    })

    res.json(data)
})

app.delete('/posts/:id', (req, res)=> {
    const {id} = req.params
    const newData = data.filter(post => post.id != id)
    res.json(newData)
})

app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(PORT)
})

