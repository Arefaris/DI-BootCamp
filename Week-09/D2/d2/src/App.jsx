import './App.css'
import Parent from './component/Parent'
import Child from './component/Child'
import Counter from "./component/Counter"
import ErrorBoundry from './Helpers/ErrorBoundry'
import Shop from './component/Shop'
import Home from './component/Home'
import {Routes, Route, Link } from "react-router"
import Product from './component/Product'
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

      <header>
        <nav>
          {/* <Link to="/">Home</Link> | 
          <Link to="/shop">Shop</Link>
          <Link to="/game">Game</Link> */}
        
        </nav>
      </header>
      <h2>Routering </h2>
      <HelloWorld />
      <form onSubmit={sendHello}>
        <input onChange={(e) => setInputValue(e.target.value)} type='text' placeholder='hi'></input>
        <input type='submit'/>
      </form>
      {response && <h2>I received your POST request. This is what you sent me: {response}</h2>}
      {/* <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/shop" element={ <Shop />}/>
        <Route path="/product/:id" element={ <Product />}/>
        <Route path="*" element={<h2>404 No route match your search</h2>} />
        <Route path="/game" element={ <Counter />}/>
      </Routes> */}
    </>
  )
}

export default App
