const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()
const app = express()

const PORT = process.env.PORT || 5001

app.listen(PORT, ()=> {
    console.log(`run on ${PORT}`)
})

// Enables Cross-Origin Resource Sharing - allows requests from different domains/ports
app.use(cors())
app.use(cookieParser())
app.use(express.json())