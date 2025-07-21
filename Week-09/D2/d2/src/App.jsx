import './App.css'
import Parent from './component/Parent'
import Child from './component/Child'
import Counter from "./component/Counter"
import ErrorBoundry from './Helpers/ErrorBoundry'
import Shop from './component/Shop'
import Home from './component/Home'
import {Routes, Route, Link } from "react-router"
import Product from './component/Product'
function App() {

  return (
    <>

      <header>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/shop">Shop</Link>
          <Link to="/game">Game</Link>
        
        </nav>
      </header>
      <h2>Routering </h2>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/shop" element={ <Shop />}/>
        <Route path="/product/:id" element={ <Product />}/>
        <Route path="*" element={<h2>404 No route match your search</h2>} />
        <Route path="/game" element={ <Counter />}/>
      </Routes>
    </>
  )
}

export default App
