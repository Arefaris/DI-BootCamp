import CounterHeader from "./CounterHeader";
import CounterDisplay from "./CounterDisplay";
import CounterButton from "./CounterButton";
import { createContext } from "react";

/**
 * 
 * creating the context
 * sharing the context
 * using the context
 */

export const CounterContext = createContext()
const CounterHolder = ({header, count, setCount}) => {
  
    return <CounterContext value={{header, count, setCount}}>
                <CounterHeader  />
                <CounterDisplay />
                <CounterButton />
        </CounterContext>
}

export default CounterHolder