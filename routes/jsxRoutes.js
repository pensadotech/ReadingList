


// Navigation routes
module.exports = function (app,bookShelf) {

  app.get("/", (req, res) => {
    res.render("index", {bookshelfObj : bookShelf})
  });

  app.get("/create", (req, res) => {
    res.render("booksCreate")
  });

  app.get("/update", (req, res) => {
    res.render("booksUpdate")
  });

  app.get("/delete", (req, res) => {
    res.render("booksDelete")
  });

}