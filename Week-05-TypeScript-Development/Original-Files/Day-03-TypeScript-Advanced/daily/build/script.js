"use strict";
let harryPotter = {
    title: "harry",
    author: "joahn",
    isbn: "112",
    publishedYear: 1996,
    genre: "fantasy"
};
let SecondPotter = {
    title: "harry second",
    author: "joahn",
    isbn: "222",
    publishedYear: 2000,
};
class Library {
    constructor(books) {
        this.books = books;
    }
    addBook(book) {
        this.books.push(book);
    }
    getBookDetails(isbn) {
        const foundBook = this.books.find(book => book.isbn === isbn);
        if (foundBook)
            return `Book title is ${foundBook.title}, Book author is ${foundBook.author}
        published year ${foundBook.publishedYear} genre ${foundBook.genre || " - "}`;
        else {
            return "Book not found";
        }
    }
    getBooks() {
        return this.books;
    }
}
class DigitalLibrary extends Library {
    constructor(books, website) {
        super(books);
        this.website = website;
    }
    listBooks() {
        return this.getBooks().map(book => book.title);
    }
}
let library = new DigitalLibrary([harryPotter, SecondPotter], "google.com");
console.log(library.getBookDetails("222"));
console.log(library.listBooks());
