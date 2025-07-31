import { CounterContext } from "./CounterHolder"
import { useContext } from "react"


const CounterDisplay = () => {
  const {count} = useContext(CounterContext)
    return <>
        <h3>Count: {count}</h3>
        </>
}

export default CounterDisplay