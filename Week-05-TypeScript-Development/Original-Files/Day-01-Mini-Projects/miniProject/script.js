let form = document.querySelector(".form")
let height = document.querySelector(".height")
let gender = document.querySelector(".gender")
let year = document.querySelector(".year")
let world = document.querySelector(".world")
let name = document.querySelector(".name")
let submitBtn = document.querySelector(".submit-input")
let loadingIcon = document.querySelector(".loading")

//switch to togle elements display
let switchDisplay = document.querySelectorAll(".switch")

submitBtn.addEventListener("click", async()=>{
    try {
        switchDisplay.forEach(el => el.style.display = "none")
        loadingIcon.style.display = "block"
        let char = await getCharacters()
        loadingIcon.style.display = "none"
        
        await renderDom(char)
        switchDisplay.forEach(el => el.style.display = "block")
    }catch (err){
         console.log(err)
         loadingIcon.style.display = "none"
         name.style.display = "block"
         name.textContent = "Oh No! That person isnt available"
    }
   

})

const getCharacters = async()=>{
    let rngUID = Math.floor(Math.random() * (82 - 1) + 1);

    let response = await fetch(`https://www.swapi.tech/api/people/${rngUID}`)
    console.log(response.status)

    if (response.status !== 200){
        throw new Error(`Something went wrong status code: ${response.status}`)
    }

    let charaster = await response.json()
    let char = charaster.result.properties
    
    //homeworld is seperate api page
    let responseHome = await fetch(`${char.homeworld}`)

    if (responseHome.status !== 200){
        throw new Error(`Something went wrong status code: ${response.status}`)
    }

    let dateHome = await responseHome.json()
    let planetName = dateHome.result.properties.name
    char["homeworld"] = planetName
    return char
    
}


const renderDom = async(res)=>{
    name.textContent = res.name
    height.textContent = "Height: " + res.height
    gender.textContent = "Gender: " + res.gender
    year.textContent = "Birth Year: " + res.birth_year
    world.textContent = "Home World: " + res.homeworld
}