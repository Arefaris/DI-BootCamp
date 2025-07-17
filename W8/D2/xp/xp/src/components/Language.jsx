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
