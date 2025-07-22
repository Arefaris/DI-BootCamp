import { useRef } from "react"
const Counter = ({number, setNumber }) => {
    const inputRef = useRef(0);

    const handleChange = () => {
        setNumber(inputRef.current.value.length);
    }
    return <>
            <h1>{number}</h1>
            <input ref={inputRef} onChange={handleChange}></input>
        </>
}

export default Counter