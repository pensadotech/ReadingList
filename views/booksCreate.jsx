const React = require('react');
const Fragment = React.Fragment;

const CreatePage = () => {
  return (
    <Fragment>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Create book</title>
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

           <div className="jumbotron text-center gradBlue">
              <div className="row">
                <div className="col-sm-4">
                  <div className="logoHolder">
                    <img className="img-fluid logoImage imgRnd10 imageShadow imageRotate"
                      src="./images/knowledge.jpg"
                      alt="Read list Logo" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <h1 className="text-centered mainTitle">Reading List</h1>
                  <hr />
                  <div className="text-centered">              
                    <a href="/">
                      <button className="btn btn-primary navButton">
                      <span className="fa fa-home"></span> Home
                      </button>
                    </a>
                  </div>
                  <br />
                </div>
              </div>
            </div>

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
                            placeholder="Book title..." />
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-author">Author</label>
                          <input type="text" className="form-control" id="book-author" 
                            placeholder="Book author..."  />
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-year">Year</label>
                          <input type="text" className="form-control" id="book-year" 
                            placeholder="Year the book was published..." />
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-genre">Genre</label>
                          <input type="text" className="form-control" id="book-genre" 
                           placeholder="Book genre..." />
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-rate">Rate (1-5)</label>
                          <input type="text" className="form-control" id="book-rate" 
                             placeholder="Book rate..." />
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-description">Description</label>
                          <textarea type="text" className="form-control" id="book-description" 
                             placeholder="Book brief description..." maxLength="100" cols="30" rows="3"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-url">Url</label>
                          <input type="text" className="form-control" id="book-url" 
                             placeholder="Refrence URL..."/>
                        </div>

                        <br/>
                        
                        <div className="form-group">
                          <label htmlFor="book-lastpage">LastPage read </label>
                          <input type="text" className="form-control" id="book-lastpage" 
                            placeholder="Last page read from book..."/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-comment">Personal comment</label>
                          <textarea type="text" className="form-control" id="book-comment"  
                             placeholder="Personal comments..." maxLength="100" cols="30" rows="3"/>
                        </div>

                        <button id="btnAddBook" type="submit" className="btn btn-primary">Save book</button>

                    {/* //     <button id="btnView" type="submit" className="btn btn-primary navButton"
                    //   data-toggle="tooltip" title="view">
                    //   <span className="fas fa-book-open"></span> View
                    // </button> */}

                      </form>
                    </div>
                  </div>
                  

                </div>
              </div>
            </div>

          </div>

           <script src="./scripts/library.js" />
          <script src="./scripts/bookCreate.js" />

        </body>
      </html>
    </Fragment >
  )
}

module.exports = CreatePage