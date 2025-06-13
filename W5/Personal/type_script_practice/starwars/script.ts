let formEl = document.querySelector(".form") as HTMLFormElement
let heightEl = document.querySelector(".height") as HTMLParagraphElement
let genderEl = document.querySelector(".gender") as HTMLParagraphElement
let yearEl = document.querySelector(".year") as HTMLParagraphElement
let worldEl = document.querySelector(".world") as HTMLParagraphElement
let nameEl = document.querySelector(".name") as HTMLParagraphElement
let submitBtnEl = document.querySelector(".submit-input") as HTMLInputElement
let loadingIconEl = document.querySelector(".loading") as HTMLDivElement
let switchDisplay = document.querySelectorAll(".switch")

interface character {
    name: string,
    birth_year: string,
    gender: string,
    height: string,
    homeworld: string,
}

submitBtnEl.addEventListener("click", async()=>{
    try {
        switchDisplay.forEach(el => (el as HTMLDivElement).style.display = "none")
        loadingIconEl.style.display = "block"

        let char: character = await getCharacters()

        loadingIconEl.style.display = "none"
        
        await renderDom(char)

        switchDisplay.forEach(el => (el as HTMLDivElement).style.display = "block")

    }catch (err){
         console.log(err)
         loadingIconEl.style.display = "none"
         nameEl.style.display = "block"
         nameEl.textContent = "Oh No! That person isnt available"
    }
   

})

const getCharacters = async()=>{
    let rngUID: number = Math.floor(Math.random() * (82 - 1) + 1);

    let response: Response = await fetch(`https://www.swapi.tech/api/people/${rngUID}`)
    console.log(response.status)

    if (response.status !== 200){
        throw new Error(`Something went wrong status code: ${response.status}`)
    }

    let data = await response.json()
    
    
   
    let char: character = {
        name: data.result.properties.name,
        birth_year: data.result.properties.birth_year,
        gender: data.result.properties.gender,
        height: data.result.properties.height,
        homeworld: data.result.properties.homeworld,
    }

    return char
    
}



const renderDom = async (res: character)=>{
    nameEl.textContent = res.name
    heightEl.textContent = "Height: " + res.height
    genderEl.textContent = "Gender: " + res.gender
    yearEl.textContent = "Birth Year: " + res.birth_year
    worldEl.textContent = "Home World: " + res.homeworld
}


