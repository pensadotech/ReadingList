

// reference book shelf
let bookShelf = require('../data/bookshelf');

// Navigation routes
module.exports = function (app) {

  app.get("/", (req, res) => {
    res.render("index", {bookshelfObj : bookShelf})
  });

  app.get("/view", (req, res) => {
    res.render("booksView",{bookshelfObj : bookShelf})
  });
  
  app.get("/create", (req, res) => {
    res.render("booksCreate")
  });

  app.get("/update", (req, res) => {
    res.render("booksUpdate",{bookshelfObj : bookShelf})
  });

  app.get("/delete", (req, res) => {
    res.render("booksDelete",{bookshelfObj : bookShelf})
  });

}