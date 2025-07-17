

function getX(){
    return new Promise((res) => {
        res(5)
    })
}

// async // await
async function _getX() {
    return 5
    //throw new Error("oops")
}

_getX()
.then(val => console.log(val))
.catch(e => console.log(e))

function getY(){
    return 6
}

async function getXY() {
    try{
        let x = await _getX()
        console.log(x)
        let y = getY()
        console.log(x+y)
    }catch {

    }
    
}


async function getUsers() {
   let user = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET"
})
    let data = await user.json()
    console.log(data)
}
getUsers()


//async in loops//
///warnging- async does not behave like expected with callback
const timeout = (id)=> {
    return new Promise(res =>{
        setTimeout(()=>{
            res(id + "done!")
        }, 2000)
        
    })
}


async function  callTimeout() {
    console.log("befor done")
    for (const item of ["first", "second", "third"]){
        console.log(await timeout(item));
        
    }
    console.log("after done")
}