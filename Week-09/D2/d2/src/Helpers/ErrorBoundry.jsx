import React from "react"

class ErrorBoundry extends React.Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError = (error)=> {
        console.log(error)
        return {hasError: true}
    }
    componentDidCatch(error, errorInfo) {
        console.log("error");
        console.log("error info");
        this.setState({hasError: true})
    }


    render() {
        if(this.state.hasError) return <p>Something went wrong {this.props.message}</p>
        return this.props.children
    }
}

export default ErrorBoundry