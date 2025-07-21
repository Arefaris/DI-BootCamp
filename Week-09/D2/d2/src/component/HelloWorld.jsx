import React from "react";

class HelloWorld extends React.Component {
    constructor(){
        super()
        this.state = {
            message: ""
        }
    }

    componentDidMount = async ()=>{
        try {
             const response = await fetch("http://localhost:3000/api/hello")
             const data = await response.json()
             if (data && data.message){
            this.setState({message: data.message})
        }
        }catch (e){
            console.log(e)
        }
       
        
        
    }

    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
            </>
        )
    }
}

export default HelloWorld