const React = require('react');
const Fragment = React.Fragment;

const UpdatePage = () => {
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

            <div className="jumbotron">
              <h1 className="text-center"><i className="fas fa-book-open"></i> Reading List</h1>
              <hr />
              <div className="text-center">
                <h2 className="text-center">Update book</h2>
                <a href="/">
                  <button className="btn btn-lg btn-default">
                    <span className="fa fa-home"></span> Home
                  </button>
                </a>
              </div>
              <br />

            </div>

            <div className="transparentBg">
              <div className="row">
                <div className="col-lg-12">

                  <div className="card">
                    <div className="card-header">
                      Table Reservation
                  </div>
                    <div className="card-body">
                      <form role="form">
                        <div className="form-group">
                          <label htmlFor="book-title">Title</label>
                          <input type="text" className="form-control" id="book-title" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-genre">Genre</label>
                          <input type="text" className="form-control" id="book-genre" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-description">Description</label>
                          <input type="text" className="form-control" id="book-description" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-author">Author</label>
                          <input type="text" className="form-control" id="book-author" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-year">Year</label>
                          <input type="text" className="form-control" id="book-year" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-rate">Rate (1-5)</label>
                          <input type="text" className="form-control" id="book-rate" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-url">Url</label>
                          <input type="text" className="form-control" id="book-url" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-pageNumber">Read until page number:</label>
                          <input type="text" className="form-control" id="book-pageNumber" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="book-comments">comments</label>
                          <input type="text" className="form-control" id="book-comments" />
                        </div>
                        <button id="btnUpdate" type="submit" className="btn btn-primary submit">Submit</button>
                      </form>
                    </div>
                  </div>


                </div>
              </div>
            </div>

          </div>

        </body>
      </html>
    </Fragment >
  )
}

module.exports = UpdatePage

