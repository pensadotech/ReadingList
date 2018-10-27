// Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Initialize book shelf
let bookShelf = require('./data/bookshelf');


// JSX
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// express middleware: static files
app.use(express.static(path.join(__dirname, 'public')));
// express middleware: capable to handle complex json
app.use(bodyParser.urlencoded({
  extended: true
}));
// express middleware: capable to handle simple json
app.use(bodyParser.json());

bookShelf.initialize();
// console.log(bookShelf.getBookShelfList())

// jsx routes
require("./routes/jsxRoutes")(app,bookShelf);
// api routes
require("./routes/apiRoutes")(app)


// Start listening - use 3000 if available or next available port
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Listening at http://localhost:${PORT}`)
});