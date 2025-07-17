function compareToTen(num){
    return new Promise((res, rej)=>{
        
        if (num <= 10){
            res("Promise was resolved")
        }else if (num > 10){
            
            rej("promise was rejected")
        }
    })
}

//In the example, the promise should reject

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))



let a = new Promise((res, reject)=>{
        setTimeout(()=>{
             res("succes")
        }, 4000)
    }).then((val) => console.log(val))

Promise.resolve(3).then(console.log(3))
Promise.reject(-1)
.catch((err)=> console.log("Boo!"))


