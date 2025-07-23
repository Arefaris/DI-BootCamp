import { useEffect, useState } from 'react'
import Quote from './components/Quote'
import q from './data/quotes'
import './App.css'

interface quote {
  "quote": string,
	"author": string
}
function App() {
  const [currentQuote, setCurrentQuote] = useState<quote>(q[0])
  const [usedQuotes, setUsedQoutes] = useState<quote[]>([])
  const [quotes, setQuotes] = useState<quote[]>(q)

  useEffect(()=>{
   generateQuote()
}, 
  [])

  const generateQuote = ()=>{
     
      setCurrentQuote((prevQuote) => {
       
        const newQoutes = quotes.filter(quote => quote.quote != prevQuote.quote)
        setQuotes(newQoutes)
        const rngQuote: quote = newQoutes[Math.floor(Math.random() * quotes.length + 1)]
        return rngQuote
      }
      
      )
      setUsedQoutes((prev)=>{
        return [...prev, currentQuote]
    })
  }

  return (
    <>
      {currentQuote && <Quote quote={currentQuote} genQuote={generateQuote}/>}
    </>
  )
}

export default App
