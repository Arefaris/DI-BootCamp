/** JSON */

let user = {
    
     
    id: 1,
    name: "Bob",
    body: "tecto",
    age:undefined,
    getName: function() {

    },
    password: "1234567"
  }


  // JSON.stringify(obj - mandatory, filter function, indent/pretty)
  // Undefinded values is not gonna be stringifyed
  // Methods not stringified

  const filterMyJson = (key, value) => {
    if (key === "password") {
        return "*****"
    }
    if (key === "id") return "12312414"
    return value
  }

  let usrJson = JSON.stringify(user, filterMyJson, 2)

  
  console.log(usrJson)
  console.log(user)

  // JSON.parse
  let userFromJson = `{
  "id": "12312414",
  "name": "Bob",
  "body": "tecto",
  "password": "*****"
}`

console.log(JSON.parse(userFromJson))


///EXCEPTIONS

try {
    
}catch (error){

}


console.log("before")

try {
    a;
}catch (e){
    console.log(e);
}


console.log("ater")

function x(num){
    return num * a

}

x()