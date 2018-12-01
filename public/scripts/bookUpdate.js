const fetch = window.fetch;

// Events -----------------------------------------------------------------------
document.getElementById("btnUpdateBook").addEventListener('click', event => {
  // override default behavior
  event.preventDefault();
  console.log("create book");

  // get data from screen
  let bookId = document.querySelector('#book-title').getAttribute('data-value');
  let bookTitle = document.querySelector('#book-title').value.trim();
  let bookAuthor = document.querySelector('#book-author').value.trim();
  let bookYear = document.querySelector('#book-year').value.trim();
  let bookGenre = document.querySelector('#book-genre').value.trim();
  let bookRate = document.querySelector('#book-rate').value.trim();
  let bookIsbn = document.querySelector('#book-isbn').value.trim();
  let bookDescr = document.querySelector('#book-description').value.trim();
  let bookUrl = document.querySelector('#book-url').value.trim();
  let bookLastPage = document.querySelector('#book-lastpage').value.trim();
  let bookComment = document.querySelector('#book-comment').value.trim();

  // save the screen entries 
  fetch('/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        id : bookId,
        title: bookTitle,
        genre: bookGenre,
        description: bookDescr,
        author: bookAuthor,
        year: bookYear,
        rate: bookRate,
        isbn: bookIsbn,
        url: bookUrl,
        pageNumber: bookLastPage,
        comments: bookComment
      })
    })
    .then(r => {
      // redirect
      console.log(r)
      window.location = './'
    })
    .catch(e => console.error(e));

  // reset screen values 
  document.querySelector('#book-title').value.trim() = '';
  document.querySelector('#book-author').value.trim() = '';
  document.querySelector('#book-year').value.trim() = '';
  document.querySelector('#book-genre').value.trim() = '';
  document.querySelector('#book-rate').value.trim() = '';

  document.querySelector('#book-description').value.trim() = '';
  document.querySelector('#book-url').value.trim() = '';
  document.querySelector('#book-lastpage').value.trim() = '';
  document.querySelector('#book-comment').value.trim() = '';

})

console.log("ping bookCreate.js")