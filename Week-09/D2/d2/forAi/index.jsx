//server/server.js

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

// src/App.jsx

import './App.css'
import HelloWorld from "./component/HelloWorld"
import { useState } from 'react'

function App() {

  const [inputValue, setInputValue] = useState()
  const [response, setResponse] = useState()
  const sendHello = async (e)=> {
    e.preventDefault()
      try {

             const response = await fetch("http://localhost:3000/api/world", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({message: inputValue
             
             })
            })

             const data = await response.json()
             if (data && data.message){
              setResponse(data.message)
            }
        }catch (e){
            console.log(e)
        }
  }

  return (
    <>

    
      <HelloWorld />
      <form onSubmit={sendHello}>
        <input onChange={(e) => setInputValue(e.target.value)} type='text' placeholder='hi'></input>
        <input type='submit'/>
      </form>
      {response && <h2>I received your POST request. This is what you sent me: {response}</h2>}
 
    </>
  )
}

export default App


// hellowrold.jsx
import React from "react";

class HelloWorld extends React.Component {
    constructor(){
        super()
        this.state = {
            message: ""
        }
    }

    componentDidMount = async ()=>{
        try {
             const response = await fetch("http://localhost:3000/api/hello")
             const data = await response.json()
             if (data && data.message){
            this.setState({message: data.message})
        }
        }catch (e){
            console.log(e)
        }
       
        
        
    }

    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
            </>
        )
    }
}

export default HelloWorld