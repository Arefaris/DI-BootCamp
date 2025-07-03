import express from 'express'
import { fetchPosts } from './data/dataService.js'

const app = express()

const PORT = 5000


app.get('/posts', async (req, res) => {
    const posts = await fetchPosts()
    res.send(posts)
    console.log('Data was recived, and response was sent succesufuly')
})

app.listen(PORT, (req, res) => {
    console.log('Listening on the port: ' + PORT)
})