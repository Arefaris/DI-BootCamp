import './App.css'
import Heading from './components/Heading'
import List from './components/List'
import Section from './components/Section'

import { useState, useRef, useMemo, useCallback, useEffect, type ChangeEvent, type ChangeEventHandler, type MouseEvent, type KeyboardEvent, createContext } from 'react'

type Users = {
  id: number,
  username: string
}

interface Auth {
  token: string,
  userId: string
}

export const AuthContext = createContext<Auth | null>(null)

function App() {
  
  // Examples of usage of dirrent hooks in typescript 
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<Users[] | null>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const streRef = useRef<string>("John")

  const heavyTask = (): number => 100

  const result = useMemo<number>((): number => heavyTask(), [])

  const testFunc = useCallback((): Users[] => {
    console.log("test")
    return [{id: 1, username: "abc"}]
  }, [])

  useEffect(()=> {
    return (): void => console.log("Unmount")
  }, [])


  // old school
  // const handleChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
  //   console.log(e.target.value)
  // }


  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value)
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) =>{
    console.log(e)
  }


  return (
    <>
    <h2>React  + typeScript</h2>
    {count}
    <button onClick={()=> setCount(count + 1)}>+</button>
    <input onChange={(e) => handleChange(e)}></input>
    <button onClick={handleClick}>Click</button>
    {/* <Heading title={'Earthquake strike Russia'} subtitle="Tsunami warning for hawaii, japan"/>
    <Section place={'Japan, Hawai'}>
      <h2>Dont go to the beach, or you will die from a tsuname wave</h2>
    </Section>
    <List items={["a", "b", "c"]} /> */}


    </>
  )
}

export default App
