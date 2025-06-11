const validateUnionType = (value: any, allowedTypes: string[]): boolean=>{
    
    if (allowedTypes.includes(typeof(value))){
        return true
    }else {
        return false
    }

}

console.log(validateUnionType("string", ["number", "string"]))