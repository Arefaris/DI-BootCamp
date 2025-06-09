const getInfo = async()=>{
    try{
        let gifyPromise = await fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
        
        if (gifyPromise.status !== 200){
            throw new Error(`Something went wrong, status ${gifyPromise.status}`) 
        }

        let gifyObject = await gifyPromise.json()
        
        console.log(gifyObject)
    }catch (err){
        console.log(err)
    }
    
}

//getInfo()

//ex2
const getSun = async()=>{
    try{
        let gifyPromise = await fetch("https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")

        if (gifyPromise.status !== 200){
            throw new Error(`Something went wrong, status ${gifyPromise.status}`) 
        }

        let gifyObject = await gifyPromise.json()
        
        console.log(gifyObject)
    }catch (err){
        console.log(err)
    }
    
}

//getSun()

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

const starships = async()=>{
     let response = await fetch("https://www.swapi.tech/api/starships/9/");

      if (response.status !== 200){
            throw new Error(`Something went wrong, status ${response.status}`) 
        }

     let data = await response.json();
     console.log(data.result)
}

//starships()

//ex4
//outcome willbe calling
//resolved

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
