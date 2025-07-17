
    let planets = [
    {name: "Mercury",
    color: "#b1b1b1"}, 
    {name: "Venus",
    color: "#e1c699",}, 
    {name: "Earth",
    color: "#1e90ff"}, 
    {name: "Mars",
    color: "#b22222",},
    {name: "Jupiter",
    color: "#d2b48c",},
    {name: "Saturn",
    color: "#f5deb3",},
    {name: "Uranus",
    color: "#afeeee",},
    {name: "Neptune",
    color: "#4169e1",}
]

for (let planet in planets){
    console.log(planet)
    let planet_div = document.createElement("div")
    planet_div.classList.add("planet")
    
    planet_div.style.backgroundColor = planets[planet].color
    
    document.querySelector(".listPlanets").append(planet_div)
   
}

