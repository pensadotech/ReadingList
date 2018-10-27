const fetch = window.fetch;

console.log("ping app.js")


document.getElementById("btnCreate").addEventListener('click', event => {

  // override default behavior
  event.preventDefault();

  console.log("create book");

  // get data from screen 
  let bookTitle = document.querySelector('#book-title').value.trim();
  let bookGenre = document.querySelector('#book-genre').value.trim();
  let bookDescr = document.querySelector('#book-description').value.trim();
  let bookAuthor = document.querySelector('#book-author').value.trim();
  let bookYear = document.querySelector('#book-year').value.trim();
  let bookRate = document.querySelector('#book-rate').value.trim();
  let bookUrl = document.querySelector('#book-url').value.trim();

  // Post the screen entries 
  fetch('/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        title: bookTitle,
        genre: bookGenre,
        description: bookDescr,
        author: bookAuthor,
        year: bookYear,
        rate: bookRate,
        url: bookUrl
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
  document.querySelector('#book-genre').value.trim() = '';
  document.querySelector('#book-description').value.trim() = '';
  document.querySelector('#book-author').value.trim() = '';
  document.querySelector('#book-year').value.trim() = '';
  document.querySelector('#book-rate').value.trim() = '';
  document.querySelector('#book-url').value.trim() = '';

})

document.getElementById("btnUpdate").addEventListene('click', event => {

  // override default behavior
  event.preventDefault();

  console.log("Update book");

  // // get data from screen 
  // let bookTitle = document.querySelector('#book-title').value.trim();
  // let bookGenre = document.querySelector('#book-genre').value.trim();
  // let bookDescr = document.querySelector('#book-description').value.trim();
  // let bookAuthor = document.querySelector('#book-author').value.trim();
  // let bookYear = document.querySelector('#book-year').value.trim();
  // let bookRate = document.querySelector('#book-rate').value.trim();
  // let bookUrl = document.querySelector('#book-url').value.trim();
  // let bookPgNum = document.querySelector('#book-pageNumber').value.trim();
  // let bookComments = document.querySelector('#book-comments').value.trim();

  

  //   // reset screen values 
  //   document.querySelector('#book-title').value.trim() = '';
  //   document.querySelector('#book-genre').value.trim() = '';
  //   document.querySelector('#book-description').value.trim() = '';
  //   document.querySelector('#book-author').value.trim() = '';
  //   document.querySelector('#book-year').value.trim() = '';
  //   document.querySelector('#book-rate').value.trim() = '';
  //   document.querySelector('#book-url').value.trim() = '';
  //   document.querySelector('#book-pageNumber').value.trim() = '';
  //   document.querySelector('#book-comments').value.trim() = '';

})