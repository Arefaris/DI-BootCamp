const get = async () => {
    const response = await fetch('http://localhost:3001/userdata')
    const data = await response.json()
    render(data)
}




const render = (arr)=>{
    const html = arr.map((item)=> {
        return `<div class='box'>
        <h2>${item.name}</h2>
        <p>${item.email}</p>
        </div>
        `
    })

    document.querySelector('.root').innerHTML = html
}

const getUserById = async (e)=>{
    e.preventDefault()
    const userId = e.target.userId.value;
    const response = await fetch('http://localhost:3001/userdata' + userId)
    const data = await response.json()
    render([data])
}

get()
