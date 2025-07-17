const leadersListEl = document.querySelector(".leader-list") as HTMLDivElement

interface user {
    name: string,
    score: number
}
const getLeaders = async ()=>{
    const response = await fetch("http://localhost:5000/getleaders")
    const data: user[] = await response.json()
    return data
}

const renderLeader = async()=> {
    const leaders = await getLeaders()
    leaders.forEach((user)=>{

        const userContainer = document.createElement("div")
        const userNameContainer = document.createElement("div")
        const userScoreContainer = document.createElement("div")

        userContainer.classList.add("user-row")
        userNameContainer.classList.add("user-name")
        userScoreContainer.classList.add("user-score")

        userNameContainer.textContent = user.name
        userScoreContainer.textContent = String(user.score)
        userContainer.appendChild(userNameContainer)
        userContainer.appendChild(userScoreContainer)
        leadersListEl.appendChild(userContainer)
    })
}

renderLeader()