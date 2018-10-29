const React = require('react');
const Fragment = React.Fragment;
const HeaderChild = require('./components/headerChild');

const UpdatePage = (props) => {
  return (
    <Fragment>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Update book</title>
          <link rel="icon" href="./images/bookicon.png" />

          <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
            integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO'
            crossOrigin='anonymous' />
          <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.4.2/css/all.css'
            integrity='sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns'
            crossOrigin='anonymous' />
          <link rel="stylesheet" href="./css/style.css" />
        </head>
        <body>

          <div className="container">

            <HeaderChild />

            <div className="transparentBg">
              <div className="row">
                <div className="col-lg-12">

                  <div className="card">
                    <div className="card-header"> <h4>Add a book to the list</h4>  </div>
                    <div className="card-body">
                      <form role="form">
                        <div className="form-group">
                          <label htmlFor="book-title">Title</label>
                          <input type="text" className="form-control" id="book-title"
                            placeholder="Book title..." defaultValue={props.bookshelfObj.selectedBook.title} 
                            data-value={props.bookshelfObj.selectedBook.id}/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-author">Author</label>
                          <input type="text" className="form-control" id="book-author"
                            placeholder="Book author..." defaultValue={props.bookshelfObj.selectedBook.author} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-year">Year</label>
                          <input type="text" className="form-control" id="book-year"
                            placeholder="Year the book was published..." defaultValue={props.bookshelfObj.selectedBook.year} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-genre">Genre</label>
                          <input type="text" className="form-control" id="book-genre"
                            placeholder="Book genre..." defaultValue={props.bookshelfObj.selectedBook.genre} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-rate">Rate (1-5)</label>
                          <input type="text" className="form-control" id="book-rate"
                            placeholder="Book rate..." defaultValue={props.bookshelfObj.selectedBook.rate} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-rate">ISBN</label>
                          <input type="text" className="form-control" id="book-isbn"
                            placeholder="Book ISBN..." defaultValue={props.bookshelfObj.selectedBook.isbn} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-description">Description</label>
                          <textarea type="text" className="form-control" id="book-description"
                            placeholder="Book brief description..." maxLength="100" cols="30" rows="3"
                            defaultValue={props.bookshelfObj.selectedBook.description} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-url">Url</label>
                          <input type="text" className="form-control" id="book-url"
                            placeholder="Refrence URL..." defaultValue={props.bookshelfObj.selectedBook.url} />
                        </div>

                        <br />

                        <div className="form-group">
                          <label htmlFor="book-lastpage">LastPage read </label>
                          <input type="text" className="form-control" id="book-lastpage"
                            placeholder="Last page read from book..." defaultValue={props.bookshelfObj.selectedBook.pageNumber} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-comment">Personal comment</label>
                          <textarea type="text" className="form-control" id="book-comment"
                            placeholder="Personal comments..." maxLength="100" cols="30" rows="3"
                            defaultValue={props.bookshelfObj.selectedBook.comments} />
                        </div>

                        <button id="btnUpdateBook" type="submit" className="btn btn-primary">Update book</button>

                      </form>
                    </div>
                  </div>


                </div>
              </div>
            </div>

          </div>


          <script src="./scripts/library.js" />
          <script src="./scripts/bookUpdate.js" />

        </body>
      </html>
    </Fragment >
  )
}

module.exports = UpdatePage

