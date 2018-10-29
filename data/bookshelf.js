// Unique identifiedr for teh books
let bookIdCount = 0;

// Book object
function Book(id, title, genre, description, author, year, rate, isbn, url, pageNumber, comments) {
  // properties
  this.id = id;
  this.title = title;
  this.genre = genre;
  this.description = description;
  this.author = author;
  this.year = year;
  this.rate = rate;
  this.isbn = isbn;
  this.url = url;
  this.pageNumber = pageNumber;
  this.comments = comments;
}

// Function prototypes for Book
Book.prototype.saveBookData = function (title, genre, description, author, year, rate, isbn, url, pageNumber, comments) {
  this.title = title;
  this.genre = genre;
  this.description = description;
  this.author = author;
  this.year = year;
  this.rate = rate;
  this.isbn = isbn;
  this.url = url;
  this.pageNumber = pageNumber;
  this.comments = comments;
}

Book.prototype.updatePageNumber = function (pageNumber) {
  this.pageNumber = pageNumber;
}

Book.prototype.updateComment = function (comments) {
  this.comments = comments;
}

// Book shelf
var bookShelf = {
  // Properties
  bookCollection: [],
  selectedBook: undefined,
  // Getters and setters
  getBookShelfList() {
    return this.bookCollection;
  },
  getbookFromListById(bkid) {
    return findBookById(bkid);
  },
  getbookFromListByTitle(bktitle) {
    return findBookByTitle(bktitle)
  },
  createBook(bk) {
    // increment counter
    bookIdCount++;
    // Crete only of book does not exist
    if (this.findBookByTitle(bk.title) === undefined) {
      // create book
      let book = new Book(bookIdCount, bk.title, bk.genre, bk.description, bk.author, bk.year, bk.rate, bk.isbn, bk.url, bk.pageNumber, bk.comments);
      // addd to collection
      this.bookCollection.push(book);
    }
  },
  updateBook(bk) {
    // find book
    let book = this.findBookById(bk.id);
    // update book
    book.saveBookData(bk.title, bk.genre, bk.description, bk.author, bk.year, bk.rate, bk.isbn, bk.url, bk.pageNumber, bk.comments);
  },
  deleteBook(bkId) {
    let pos = this.findBookPositionById(bkId);
    // remove fron list
    if (pos > -1) {
      this.bookCollection.splice(pos,1);
    }
  },
  //Functions 
  findBookPositionById(bkId) {
    let position = -1;
    // look for target friend by name
    for (let i = 0; i < this.bookCollection.length; i++) {
      let book = this.bookCollection[i];
      if (parseInt(book.id) === parseInt(bkId)) {
        position = i;
        break;
      }
    }
    return position;
  },
  findBookById(bkId) {
    let tgtBook = undefined;
    for (let i = 0; i < this.bookCollection.length; i++) {
      let book = this.bookCollection[i];
      if (parseInt(book.id) === parseInt(bkId)) {
        tgtBook = book;
        break;
      }
    }
    return tgtBook;
  },
  findBookByTitle(bkTitle) {
    let tgtBook = undefined;
    for (let i = 0; i < this.bookCollection.length; i++) {
      let book = this.bookCollection[i];
      if (book.title === bkTitle) {
        tgtBook = book;
        break;
      }
    }
    return tgtBook;
  }
}

// seed data for Bookshelf
// book #1
bookIdCount++;
let seedBook1 = new Book(bookIdCount, "book1", "general", "this is a large explanation about book #1", "John Doe", "2001", "4", "123-132",  "www.google.com", 3, "");
seedBook1.updateComment("This is a personal comment on book#1");
bookShelf.bookCollection.push(seedBook1);
// book #2
bookIdCount++;
let seedBook2 = new Book(bookIdCount, "book2", "general", "this is a large explanation about is book #2", "John Doe", "1820", "3", "435-234", "www.google.com", 45,"");
seedBook2.updateComment("This is a personal comment on book#2");
bookShelf.bookCollection.push(seedBook2);

// Export bookShelf
module.exports = bookShelf