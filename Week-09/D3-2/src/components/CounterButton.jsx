import { CounterContext } from "./CounterHolder"
import { useContext } from "react"

const CounterButton = ({count, setCount}) => {
    const {count, setCount} = useContext(CounterContext)
    return <>
        <button onClick={(e)=> {setCount(count + 1)}}>+</button>
    </>
}

export default CounterButton