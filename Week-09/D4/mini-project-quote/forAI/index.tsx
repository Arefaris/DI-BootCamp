//app.tsx
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


//components/Quote.tsx
import { useState } from "react";
import "./Quote.css"

interface QuoteProps {
  quote: {
    quote: string;
    author: string;
  };
  genQuote: () => void;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const Quote = ({ quote, genQuote}: QuoteProps)=> {
    const [styles, setStyles] = useState({
        "background" : {
            "backgroundColor": getRandomColor(),
            "color": getRandomColor()
        },
        "button": {
            "backgroundColor": getRandomColor(),
            "color": getRandomColor()
        },
        "quote": {
            "color": getRandomColor()
        }
        
    })

    const genStyles =()=> {
        setStyles({
        "background" : {
            "backgroundColor": getRandomColor(),
            "color": getRandomColor()
        },
        "button": {
            "backgroundColor": getRandomColor(),
            "color": getRandomColor()
        },
        "quote": {
            "color": getRandomColor()
        }
        })

        genQuote()

    } 

    if(quote){
        return <div className="quote-modal" style={styles.background}>
            <h1 style={styles.quote} >{quote.quote}</h1>
            <h4 style={styles.quote}>{quote.author}</h4>
            <button style={styles.button} onClick={genStyles}>New quote</button>
        </div>
    }      
    }
    

export default Quote

