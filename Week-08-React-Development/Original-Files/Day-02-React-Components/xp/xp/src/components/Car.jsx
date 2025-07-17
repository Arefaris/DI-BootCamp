import { useState } from "react"
import Garage from "./Garage"
const Car = (props)=> {
    const [color, setColor] = useState("Blue")

    
    const {name, model} = props.carinfo
    return <>
        <h1>This car is {color} {name} {model}</h1>
        < Garage size="small"/>
    </>
}

export default Car