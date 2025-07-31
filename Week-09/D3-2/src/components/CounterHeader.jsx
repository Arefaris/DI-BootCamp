import { CounterContext } from "./CounterHolder"
import { useContext } from "react"

const CounterHeader = () => {
    const {header} = useContext(CounterContext)
    return <>
        <h2>{header}</h2>
        </>
}

export default CounterHeader