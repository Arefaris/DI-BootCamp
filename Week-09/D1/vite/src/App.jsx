import './App.css'
import { useEffect, useState } from 'react'
import Articles from './components/Articles'
import ArticleClass from './components/ArticleClass'
import Helper from './components/Helper'
import HelperClass from './components/HelperClass'
function App() {
 
  const [show, setShow] = useState(true)

  return (
    <>
     <h1>Use effect </h1>
     <button onClick={() => setShow(!show)}>
       {show ? 'Hide Articles' : 'Show Articles'}
      </button>
     {show ? < ArticleClass /> : null}
     < Helper />
     < HelperClass />
    </>
  )
}

export default App
