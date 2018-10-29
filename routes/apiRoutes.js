
// reference book shelf
let bookShelf = require('../data/bookshelf');

// API routes
module.exports = function (app) {
  
  app.post('/select', (req, res) => {
    book = bookShelf.findBookById(req.body.bookid)
    bookShelf.selectedBook = book
    res.sendStatus(200)
  });

  app.post('/create', (req, res) => {
    bookShelf.createBook(req.body)
    res.sendStatus(200)
  })
  
  app.post('/update', (req, res) => {
    book = req.body;
    bookShelf.updateBook(req.body)
    res.sendStatus(200)
  })

  app.delete('/delete', (req, res) => {
    console.log("post-delete");
    let bookId = req.body.bookId
    bookShelf.deleteBook(bookId);
    res.sendStatus(200);
  })

}