
// Functions ----------------------------------------------------------
function getFirstSelectedBook() {
    // get all check boxes
    let books = document.getElementsByClassName("item-selection");
    let selectedBookid = undefined;
    // Find the first check box that is selected
    for (let i = 0; i < books.length; i++) {
      let element = books[i];
      if (element.checked) {
        selectedBookid = element.getAttribute("data-value");
        break;
      }
    }
    return selectedBookid;
  }
  
  function getAllSelectedBooks() {
    // get all check boxes
    let books = document.getElementsByClassName("item-selection");
    let selectedBookidArr = [];
    // collect all selected
    for (let i = 0; i < books.length; i++) {
      let element = books[i];
      if (element.checked) {
        selectedBookid = element.getAttribute("data-value");
        selectedBookidArr.push(selectedBookid);
      }
    }
    return selectedBookidArr;
  }

  console.log("ping libray.js")