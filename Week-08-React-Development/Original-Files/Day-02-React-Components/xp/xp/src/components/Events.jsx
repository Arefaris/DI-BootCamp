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
