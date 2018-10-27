let bookIdCount = 0;



// Book object
function Book(id, title, genre, description, year, rate, url) {
  // properties
  this.id = id;
  this.title = title;
  this.genre = genre;
  this.description = description;
  this.year = year;
  this.rate = rate;
  this.url = url;
  this.pageNumber = 0;
  this.comments = '';
}

// Function prototypes
Book.prototype.updateBook = function (title, genre, description, year, rate, url, pageNumber, comments) {
  this.title = title;
  this.genre = genre;
  this.description = description;
  this.year = year;
  this.rate = rate;
  this.url = url;
  this.pageNumber = pageNumber;
  this.comments = comments;
}

var bookShelf = {
  // Properties
  bookCollection: [],
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
  set createBook(bk) {
    // increment counter
    bookIdCount++;
    // Crete only of book does not exist
    if (findBookByTitle(bk.title) === undefined) {
      // create book
      let book = new Book(bookIdCount, bk.title, bk.genre, bk.description, bk.year, bk.rate,bk.url);
      // addd to collection
      this.bookCollection.push(book);
    }
  },
  set updateBook(bk) {
    // find book
    let book = findBookById(bk.id);
    // update book
    book.updateBook(title, genre, description, year, rate, url, pageNumber, comments);
  },
  set deleteBook(bkId) {
    let pos = findBookPosition(bkId);
    if (pos > -1) {
      this.bookCollection.slice(pos);
    }
  },
  initialize() {
    let book1 = new Book(1, "book1", "general", "this is book #1", "2018", "2","google.com");
    this.bookCollection.push(book1);
    let book2 = new Book(1, "book2", "general", "this is book #2", "2018", "4","google.com");
    this.bookCollection.push(book2);
  },
  //Functions 
  findBookPositionById(bkId) {
    let position = -1;
    // look for target friend by name
    for (let i = 0; i < this.bookShelf.length; i++) {
      let book = this.bookShelf[i];
      if (book.id === bkId) {
        position = i;
        break;
      }
    }
    return position;
  },
  findBookById(bkId) {
    let tgtBook = undefined;
    for (let i = 0; i < this.bookShelf.length; i++) {
      let book = this.bookShelf[i];
      if (book.id === bkId) {
        tgtBook = book;
        break;
      }
    }
    return tgtBook;
  },
  findBookByTitle(bkTitle) {
    let tgtBook = undefined;
    for (let i = 0; i < this.bookShelf.length; i++) {
      let book = this.bookShelf[i];
      if (book.title === bkTitle) {
        tgtBook = book;
        break;
      }
    }
    return tgtBook;
  }
}

// Export bookShelf
module.exports = bookShelf