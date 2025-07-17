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
