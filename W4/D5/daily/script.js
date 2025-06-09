const getRandomGif = async(searchTag)=>{
    try{
        let response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${searchTag}&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
        if (response.status !== 200){
            throw new Error (`Something went wrong. Status code ${response.status}`)
        }

        let data = await response.json()
        renderDOM(data.data.images.original.url, data.data.id)
    }catch (error){
        console.log(error)
    }
}

let form = document.querySelector("form")
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    let userCategory = event.target.category.value
    getRandomGif(userCategory)
    
    
})
const dellALlBtn = document.createElement("button")
dellALlBtn.textContent = "DELETE ALL"
document.body.appendChild(dellALlBtn)

const renderDOM = (url, id)=>{
    console.log(url)
    const imgContainer = document.createElement("div")
    const allImagesContainer = document.createElement("div")
    const image = document.createElement("img")
    const delBtn = document.createElement("button")
    delBtn.textContent = "DELETE"

    imgContainer.classList.add(id)
    allImagesContainer.classList.add("allImages")

    delBtn.addEventListener("click", ()=>{
        const el = document.querySelector(`.${id}`)
        el.remove()
    })

    dellALlBtn.addEventListener("click", ()=>{
        document.querySelector(".allImages").remove()
    })

    image.src = url
    imgContainer.appendChild(image)
    imgContainer.appendChild(delBtn)
    allImagesContainer.appendChild(imgContainer)
    
    document.body.appendChild(allImagesContainer)
    
}