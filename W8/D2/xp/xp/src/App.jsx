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
