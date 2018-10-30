const fetch = window.fetch;

// Events -----------------------------------------------------------------------
document.getElementById("btnView").addEventListener('click', event => {
  // override default behavior
  event.preventDefault();
  // get first selected book
  let selectedBookid = getFirstSelectedBook();
  // Select the book
  if (selectedBookid != undefined) {
    fetch('/select', {
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
    // show modal
    $('#userWarningModal').modal('show')
  }
})

document.getElementById("btnEdit").addEventListener('click', event => {
  // override default behavior
  event.preventDefault();
  // get first selected book
  let selectedBookid = getFirstSelectedBook();
  // Select the book
  if (selectedBookid != undefined) {
    fetch('/select', {
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
        window.location = "./update";
      })
      .catch(e => console.error(e))
  } else {
    console.log("please select a book!")
    // show modal
    $('#userWarningModal').modal('show')
  }
})

document.getElementById("btnDelete").addEventListener('click', event => {
  // override default behavior
  event.preventDefault();
  // get first selected book
  let selectedBookid = getFirstSelectedBook();
  // Select the book
  if (selectedBookid != undefined) {
    fetch('/select', {
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
        window.location = "./delete";
      })
      .catch(e => console.error(e))
  } else {
    console.log("Please select a book!")
    // show modal
    $('#userWarningModal').modal('show')
  }
})

console.log("ping index.js")