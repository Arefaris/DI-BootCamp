import { useState } from 'react'
import './App.css'
import Language from './components/language'
function App() {
  const [languages, setLanguages] = useState([
                                            {name: "Php", votes: 0},
                                            {name: "Python", votes: 0},
                                            {name: "JavaSript", votes: 0},
                                            {name: "Java", votes: 0}])

  return (
    <>
      {
        languages.map(({name, votes}) => {
          return <Language name={name} votes={votes} setLang={setLanguages}/>
        })
      }
    </>
  )
}

export default App

import React from 'react'

export default function Language({votes, name,setLang}) {
  
  const increaseVote = () => {

    setLang((prevLang) => {
        const newLang = prevLang.map(lang => 
        lang.name === name ? {...lang, votes: lang.votes + 1} : lang)
        return newLang
    })
  }


  return (
    <>
    <div>{votes}  {name}</div>
    <button onClick={increaseVote}>Increase</button>
    </>
    
  )
}
