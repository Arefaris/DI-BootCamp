import { useState } from "react";

const Counter = ({header}) => {
    const [count, setCount] = useState(0)


    return <>
        <h2>{header}</h2>
        <h3>Count: {count}</h3>
        <button onClick={(e)=> {setCount(count + 1)}}>+</button>
    </>
}

export default Counter