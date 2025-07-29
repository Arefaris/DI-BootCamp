import './App.css'
import Posts from './components/Posts'
import {getPosts} from "./components/postsSlice"
import { useSelector, useDispatch } from 'react-redux'

function App() {
  
  
  return (
    <>
    <Posts />
    </>
  )
}

export default App
