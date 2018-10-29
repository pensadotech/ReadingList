const fetch = window.fetch;

// Events -----------------------------------------------------------------------
document.getElementById("btnDeleteBook").addEventListener('click', event => {
  // override default behavior
  event.preventDefault();
  console.log("create book");

  // get data from screen
  let bookid = document.querySelector('#book-title').getAttribute('data-value');
  console.log(bookid)
  
  // save the screen entries 
  fetch('/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        bookId : bookid
      })
    })
    .then(r => {
      // redirect
      console.log(r)
      window.location = './'
    })
    .catch(e => console.error(e));

})

console.log("ping bookCreate.js")