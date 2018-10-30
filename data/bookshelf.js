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
      this.bookCollection.splice(pos, 1);
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
// fields: id, title, genre, description, author, year, rate, isbn, url, pageNumber, comments
// book #1
bookIdCount++;
let seedBook1 = new Book(
  bookIdCount,
  "Makers, the new industrial revolution",
  "Motivational",
  "3D Robotics co-founder and bestselling author Chris Anderson takes you to the front lines of a new industrial revolution as today’s entrepreneurs, using open source design and 3-D printing, bring manufacturing to the desktop.  ",
  "Chirs Adnerson",
  "2012", 
  "4", 
  "978-0-307-72097-9", 
  "https://www.amazon.com/Makers-Industrial-Revolution-Chris-Anderson/dp/0307720969/ref=sr_1_1?ie=UTF8&qid=1540867602&sr=8-1&keywords=Makers+chris+anderson", 
  3,
  "A visionary review if the next technological revolution.");
bookShelf.bookCollection.push(seedBook1);

// book #2
bookIdCount++;
let seedBook2 = new Book(
  bookIdCount, 
  "We have no idea", 
  "Science", 
  "Humanity's understanding of the physical world is full of gaps. Not tiny little gaps you can safely ignore —there are huge yawning voids in our basic notions of how the world works. PHD Comics creator Jorge Cham and particle physicist Daniel Whiteson have teamed up to explore everything we don't know about the universe.", 
  "Jorge Cham & Daniel Whiteson", 
  "2017", 
  "3", 
  "9780735211320", 
  "https://www.amazon.com/We-Have-No-Idea-Universe/dp/0735211515/ref=sr_1_1?ie=UTF8&qid=1540868015&sr=8-1&keywords=We+have+no+idea", 
  45, 
  "It turns out the universe is full of weird things that don't make any sense.");
bookShelf.bookCollection.push(seedBook2);

// Export bookShelf
module.exports = bookShelf