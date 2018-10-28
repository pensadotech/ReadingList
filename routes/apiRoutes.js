
// reference book shelf
let bookShelf = require('../data/bookshelf');

// API routes
module.exports = function (app) {
  
  app.post('/view', (req, res) => {
    book = bookShelf.findBookById(req.body.bookid)
    bookShelf.selectedBook = book;
    res.sendStatus(200)
  });
  
  app.post('/create', (req, res) => {
    console.log("post-create")
    bookShelf.createBook(req.body); 
    res.sendStatus(200)
  })

  app.post('/update', (req, res) => {
    console.log("post-update")
    res.sendStatus(200)
  })

  app.post('/delete', (req, res) => {
    console.log("post-delete")
    res.sendStatus(200)
  })

}