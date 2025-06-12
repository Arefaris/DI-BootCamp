interface Book {
    title: string,
    author: string, 
    isbn: string,
    publishedYear: number,
    genre?: string
}

let harryPotter: Book = {
    title: "harry",
    author: "joahn",
    isbn: "112",
    publishedYear: 1996,
    genre: "fantasy"
}

let SecondPotter: Book = {
    title: "harry second",
    author: "joahn",
    isbn: "222",
    publishedYear: 2000,
}


class Library {
    private books: Book[]
    constructor(books: Book[]){
        this.books = books
    }

    addBook(book: Book){
        this.books.push(book)
    }

    getBookDetails(isbn: string){
        const foundBook = this.books.find(book => book.isbn === isbn)
        if(foundBook) return `Book title is ${foundBook.title}, Book author is ${foundBook.author}
        published year ${foundBook.publishedYear} genre ${foundBook.genre || " - "}`
        else {
            return "Book not found"
        }
    }

    getBooks(){
        return this.books
    }

}

class DigitalLibrary extends Library {
    readonly website: string;
    constructor(books: Book[], website: string){
        super(books)
        this.website = website
    }

    listBooks(){
        return this.getBooks().map(book => book.title)
    }
}


let library = new DigitalLibrary([harryPotter, SecondPotter], "google.com")
console.log(library.getBookDetails("222"))
console.log(library.listBooks())