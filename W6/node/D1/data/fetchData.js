// function that get a url as parametr
// return JSON as an Array/Object
import axios from "axios"

export const fetchData = async(url)=>{
    const j = await axios.get(url)
    return j
}