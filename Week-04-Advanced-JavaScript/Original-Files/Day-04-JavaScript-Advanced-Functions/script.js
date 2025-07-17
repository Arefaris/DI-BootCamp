
console.log("before")

console.log("after")



//CallBack

function myCallBack(){
    console.log("My callback excuted!!!")
}

function execCallBack(func){
    func()
}
execCallBack(myCallBack)



// will wait 5 * 1000
// function getY(callback){
//     setTimeout(()=> {
//     callback(10)
// }, 5000)
// }

// function getXY(){
    
//     getY((x)=>{
//         console.log(x)
// })
   
// }

// getXY()


//** Make tea */


//takes 2 seconds





//** Promise (ES6) /Async / Await */

// ** pending */
// ** fullfiled - resolved */
// ** fulldiled - rejected */

let promise1 = new Promise((resolve, reject) =>{
    resolve("hi")
    //reject("1")
})


console.log(promise1)

promise1.then(a => {
    return a
})
.then(a => {
    return a
})
.then((a)=>{
    console.log(a)
})
.catch(e =>{
    console.log(e)
})

let p = new Promise((res, ref) =>{
    setTimeout(()=>{
        res(5)
    }, 5 * 1000)
})

console.log(p)

p.then(val => console.log(val))

function getMyX(){
    return new Promise(res => {
        setTimeout(()=> {
            res(6)
        }, 6)
    })
}

function getMyY(){
    return new Promise(res => {
        setTimeout(()=> {
            res(5)
        }, 5)
    })
}


function getMyXY(){
    getMyX().then((x) => {
        console.log("x=>", x)

        getMyY().then((y) => {
            console.log("y=>", y)
        })


    }).catch((e)=> console.log(e))
}


const flip = () => {
    const coin = Math.floor(Math.random() * 2)
    return coin === 0 ? "head" : "tail"
}

const flipcoin = new Promise((res, rej) => {
    setTimeout(()=>{
        const result = flip()

        if(result === "head"){
            res("you win =>" + result)
        }
        else {
            rej("you loose" + result)
        }
    }, 3000)
})

console.log(flipcoin)

// promis.resolve promise.reject

function getNum(num) {
    if (num) {
        return Promise.resolve(num)
    }
    else {
        return Promise.reject(-1)
    }
}


getNum(10)
.then(val => {
    console.log(val)
})
.catch(e => {
    console.log(e)
})


// Promise.all()
// Promise.allSettled()
// Promise.race()
// Promise.any()

const p1 = Promise.resolve("resolve 1")
const p2 = Promise.resolve("resolve 2")
const p3 = Promise.resolve("resolve 3")

let arrayOfPromises = [p1, p2, p3]
console.log(arrayOfPromises)

Promise.all(arrayOfPromises)
.then(res => {
    console.log(res)
})
.catch((e)=>{
    console.log(e)
})


Promise.allSettled(arrayOfPromises)
.then(res => {
    console.log(res)
})
.catch((e)=>{
    console.log(e)
})


Promise.any(arrayOfPromises)
.then(res => {
    console.log(res)
})
.catch((e)=>{
    console.log(e)
})


