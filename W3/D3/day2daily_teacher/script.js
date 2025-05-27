const solarSystem = [
  { name: "Mercury", moons: 0, color: "#a9a9a9" },
  { name: "Venus", moons: 0, color: "#ffcc00" },
  { name: "Earth", moons: 1, color: "#0077be" },
  { name: "Mars", moons: 2, color: "#b22222" },
  { name: "Jupiter", moons: 79, color: "#f5deb3" },
  { name: "Saturn", moons: 82, color: "#d2b48c" },
  { name: "Uranus", moons: 27, color: "#66cdaa" },
  { name: "Neptune", moons: 14, color: "#4169e1" },
];


const section = document.querySelector(".listPlanets")

for (let i = 0; i< solarSystem.length; i++){
    // create div
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = solarSystem[i].color
    planetDiv.innerHTML = "<h2>" + solarSystem[i].name + "</h2>"
    section.appendChild(planetDiv)

    // add the moons
    let left = 0
    for (let j = 0; j < solarSystem[i].moons; j++){
        const moonDiv = document.createElement("div");
        moonDiv.classList.add("moon")
        moonDiv.style.backgroundColor = getRandomColor();
        planetDiv.appendChild(moonDiv)
        moonDiv.style.left = left + "px"
        left += 15
    }

}

function getRandomColor(){
    //color range
    let letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * 16)
        color += letters[random]
    }
    return color
}