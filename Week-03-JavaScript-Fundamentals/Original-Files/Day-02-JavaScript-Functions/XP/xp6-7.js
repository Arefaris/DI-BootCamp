
let nav = document.getElementById("navBar")
let ul = document.getElementsByTagName("ul")
nav.setAttribute("id", "socialNetworkNavigation")
console.log(nav)

let li_el = document.createElement("li")
let a = document.createElement("a")
a.textContent = "logout"
a.setAttribute("href", "#")
li_el.append(a)
ul[0].appendChild(li_el)

let first = ul[0].firstElementChild.textContent
let last = ul[0].lastElementChild.textContent
console.log(first, last)

// ex7
allBooks = [{
    title: "harry potter",
    author: "JKRolling",
    image: "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_.jpg",
    alreadyRead: false
},{
    title: "loard of the rings",
    author: "J. R. R. Tolkien",
    image: "https://static.wikia.nocookie.net/lotr/images/8/87/Ringstrilogyposter.jpg/revision/latest/scale-to-width-down/1200?cb=20210720095933",
    alreadyRead: true
}]


list_books = document.querySelector(".listBooks")


for (book in allBooks){
    div_book = document.createElement("div")
    title = document.createElement("h1")
    author = document.createElement("h2")
    image = document.createElement("img")
    
    title.textContent = allBooks[book].title
    author.textContent = allBooks[book].author
    image.setAttribute("src", allBooks[book].image)
    image.setAttribute("width", 100)
    div_book.append(title)
    div_book.append(author)
    div_book.append(image)

    list_books.append(div_book)

    if (allBooks[book].alreadyRead){
        div_book.style.color = "red"
    }

}
