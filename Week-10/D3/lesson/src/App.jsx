import './App.css'
import Posts from './components/Posts'
import {getPosts} from "./components/postsSlice"
import { useSelector, useDispatch } from 'react-redux'
import UsersBox from './components/UsersBox'

function App() {
  
  
  return (
    <>
    <UsersBox />
    <Posts />
    </>
  )
}

export default App
