//app jsx
import { useState } from 'react'
import './App.css'
import Car from './components/Car';
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';
function App() {

  const carinfo = {name: "Ford", model: "Mustang"};
  return (
    <>
      <Car carinfo={carinfo} />
      <Events />
      <Phone />
      <Color />
    </>
  )
}

export default App



//Car.jsx
import { useState } from "react"
import Garage from "./Garage"
const Car = (props)=> {
    const [color, setColor] = useState("Blue")

    
    const {name, model} = props.carinfo
    return <>
        <h1>This car is {color} {name} {model}</h1>
        < Garage size="small"/>
    </>
}

export default Car

//Color.jsx
import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Color() {

// useEffect(alert("UseEffect reached"))

const changeColor = ()=>{
   setFavoriteCOlor("blue")
}

  const [favoriteColor, setFavoriteCOlor ] = useState("red")
  return (
    <>
    <div>My favorite color is {favoriteColor}</div>
    <button onClick={changeColor}>Change</button>
    </>
    
  )
}

//Events.jsx
import React from 'react'
import { useState } from 'react'
export default function Events() {

  const [isToggleOn, setIsToggleOn] = useState(true)


  const clickMe = ()=>{
    alert("I was clicked")
  }

  const handleKeyDown = (event)=>{
    if (event.key === "Enter") {
        alert("The enter key was pressed, you input is: " + event.target.value)
    }
    
  }
  return (
    <>
    <button onClick={clickMe}>Click!</button>
    <input onKeyDown={handleKeyDown} placeholder='Press ENTER'></input>
    <button onClick={() => setIsToggleOn(isToggleOn ? false: true)}>{isToggleOn ? "ON" : "OFF"}</button>
    </>
   
  )
}

//Garage.jsx
const Garage = (props)=> {
    const {size} = props
    return <>
        <h2>Who lives in my {size} Garage?</h2>
    </>
}

export default Garage

//Phone.jsx
import React from 'react'
import { useState } from 'react'

export default function Phone() {
  const [phone, setPhone] = useState({brand: "Samsung", model: "Galaxy S20", color: "black", year: 2020})
  
  const changeColor = ()=>{
    setPhone(prevPhone => {
        return {...prevPhone, color: "green"}
    })
  }
  return (
    <>
        <div>My phone is a {phone.brand}</div>
        <div>It is a {phone.color} {phone.brand} from {phone.year}</div>
        <button onClick={changeColor}>Change color</button>
    </>
    
  )
}