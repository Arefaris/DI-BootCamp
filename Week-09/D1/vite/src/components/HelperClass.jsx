import React, {Component} from "react";

class HelperClass extends Component {
    constructor(){
        super();
        this.arr = []
        this.state = {
            count:0,
            post: []
        }
    }

    addOne = () => {
        this.state.count++
        this.setState(
            {count: this.state.count+1}
        )

        
    }

    componentDidMount = ()=>{
        console.log(123)
    }

    componentDidUpdate = (prevProps, prevState)=> {
        console.log("ugly update")
    }

    componentWillUnmount = ()=> {
        console.log("component will unmount")
    }

    render() {
        return(
            <>
            <h2 style={{color: "blue"}}>Helper Class Component</h2>
            <h2>Counter: {this.state.count}</h2>
            <button onClick={()=> this.addOne()}></button>
            </>
        )
    }
}

export default HelperClass