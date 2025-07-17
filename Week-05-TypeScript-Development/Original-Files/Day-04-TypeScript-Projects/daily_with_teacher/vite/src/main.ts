// book interface

interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

// Define the BookLibrary interface

interface BookLibrary {
  addBook(book: Book): void;
  getBookDeatails(isbn: string): string;
  getBooks(): Book[]
}

// Library Class /

class Library implements BookLibrary {
  private books: Book[]

  constructor(){
    this.books = []
  }

  public addBook(book: Book): void {
    this.books.push(book)
  }

  public getBookDeatails(isbn: string): string {
    const book = this.books.find(b => b.isbn === isbn)
    // if(book){
    //   return `${book.title} ${book.author} ${book.publishedYear} ${book.isbn} ${book?.genre}`
    // }
    // return "book not found"

    return book
    ? `${book.title} ${book.author} ${book.publishedYear} ${book.isbn} ${book?.genre}`
    : "book not found"
  }

  public getBooks(): Book[] {
    return [...this.books]
  }
}


// Digital library extends library

class DigitalLibrary extends Library {
  public readonly website: string;

  constructor(website: string){
    super();
    this.website = this.website
  }

  public listBooks(): string[] {
    return this.getBooks().map(book => book.title)
  }
}

const myLibrary = new DigitalLibrary("https:mylibrary.com");

//** add book */

myLibrary.addBook ({
  title: "the Great bomb",
  author: "Dondald Trump",
  isbn: "usa2025",
  publishedYear: 2025,
  genre: "World War 3"
})

myLibrary.addBook ({
  title: "the Great Peace",
  author: "No bode knows",
  isbn: "no on knows",
  publishedYear: 3011,
  genre: "World War 3"
})

console.log(myLibrary.getBookDeatails("usa2025"))