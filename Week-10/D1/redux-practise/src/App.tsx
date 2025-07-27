import type { RootState } from './redux/store'
import './App.css'
import Habbit from './components/Habbit'
import HabbitList from './components/HabbitList'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import  {useDispatch}  from 'react-redux'
import { add } from './redux/actions'

function App() {
  const [inputVal, setInputVal] = useState("")
  const habits = useSelector((state: RootState) => state.habbitReducer.habits)
  const dispatch = useDispatch()
  
  const AddHabbit = ()=> {
    dispatch(add(inputVal, new Date(Date.now()).toLocaleDateString()))
    console.log(habits)
  }
  
  return (
    <>
      <h1>
        Habbit Tracker
      </h1>
      <input onChange={(e)=> {setInputVal(e.target.value)}} type="text"></input>
      <button onClick={AddHabbit}>Add habbit</button>

      <HabbitList>
      </HabbitList>
     
    </>
  )
}

export default App
