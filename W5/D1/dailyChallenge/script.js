
const getCodes = async()=>{
    const API = "373a4fe4e12877bf20e69aa6"
    let response = await fetch(`https://v6.exchangerate-api.com/v6/${API}/codes`)
    if (response.status !== 200){
        throw new Error(`Something went wrong ${response.status}`)
    } 

}