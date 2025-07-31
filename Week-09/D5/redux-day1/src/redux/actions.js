export const ACTION_INCREMENT = "Increment" 
export const ACTION_DECREMENT= "Increment" 

export const add = () => {
    return {
        type: ACTION_INCREMENT,
    }
}

export const minus = ()=> {
    return {
        type : ACTION_DECREMENT,
    }
}