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
