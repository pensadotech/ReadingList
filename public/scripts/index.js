const fetch = window.fetch;

// Events -----------------------------------------------------------------------
document.getElementById("btnView").addEventListener('click', event => {
  // override default behavior
  event.preventDefault();
  console.log("view book");
  // get first selected book
  let selectedBookid = getFirstSelectedBook();
  console.log(`selected book id: ${selectedBookid}`);

  // display the selected book
  if (selectedBookid != undefined) {
    fetch('/view', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
          bookid: selectedBookid
        })
      })
      .then(r => {
        console.log(r)
        window.location = "./view";
      })
      .catch(e => console.error(e))
  } else {
    console.log("please select a book!")
  }

})

console.log("ping index.js")



// document.getElementById("btnUpdate").addEventListene('click', event => {

//   // override default behavior
//   event.preventDefault();

//   console.log("Update book");

//   // // get data from screen 
//   // let bookTitle = document.querySelector('#book-title').value.trim();
//   // let bookGenre = document.querySelector('#book-genre').value.trim();
//   // let bookDescr = document.querySelector('#book-description').value.trim();
//   // let bookAuthor = document.querySelector('#book-author').value.trim();
//   // let bookYear = document.querySelector('#book-year').value.trim();
//   // let bookRate = document.querySelector('#book-rate').value.trim();
//   // let bookUrl = document.querySelector('#book-url').value.trim();
//   // let bookPgNum = document.querySelector('#book-pageNumber').value.trim();
//   // let bookComments = document.querySelector('#book-comments').value.trim();



//   //   // reset screen values 
//   //   document.querySelector('#book-title').value.trim() = '';
//   //   document.querySelector('#book-genre').value.trim() = '';
//   //   document.querySelector('#book-description').value.trim() = '';
//   //   document.querySelector('#book-author').value.trim() = '';
//   //   document.querySelector('#book-year').value.trim() = '';
//   //   document.querySelector('#book-rate').value.trim() = '';
//   //   document.querySelector('#book-url').value.trim() = '';
//   //   document.querySelector('#book-pageNumber').value.trim() = '';
//   //   document.querySelector('#book-comments').value.trim() = '';

// })