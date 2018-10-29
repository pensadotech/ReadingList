const React = require('react');
const Fragment = React.Fragment;
const HeaderChild = require('./components/headerChild');

const ViewPage = (props) => {
  return (
    <Fragment>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Book details</title>
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
                    <div className="card-header"> <h4>View book details</h4> </div>
                    <div className="card-body">
                      <div className="bookCardHead">
                        <div className="row">
                          <div className="col-sm-2 bookCardSectionLabel">
                            <p className="card-text">Title :</p>
                          </div>
                          <div className="col-sm-10">
                            {<h4 className="card-title">{props.bookshelfObj.selectedBook.title}</h4>}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 bookCardSectionLabel">
                            <p className="card-subtitle">Author :</p>
                          </div>
                          <div className="col-sm-10">
                            {<h6 className="card-subtitle text-muted">{props.bookshelfObj.selectedBook.author}</h6>}
                          </div>
                        </div>
                      </div>

                      <div className="bookCardData">
                        <div className="row">
                          <div className="col-sm-2 bookCardSectionLabel">
                            <p className="card-text">Year :</p>
                          </div>
                          <div className="col-sm-2 bookCardSectionData">
                            {<p className="card-text">{props.bookshelfObj.selectedBook.year} </p>}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 bookCardSectionLabel">
                            <p className="card-text">Genre :</p>
                          </div>
                          <div className="col-sm-2 bookCardSectionData">
                            {<p className="card-text">{props.bookshelfObj.selectedBook.genre} </p>}
                          </div>
                        </div>
                        <div className="row ">
                          <div className="col-sm-2 bookCardSectionLabel">
                            <p className="card-text">Rate :</p>
                          </div>
                          <div className="col-sm-8 bookCardSectionData">
                            <p className="card-text">{props.bookshelfObj.selectedBook.rate}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 bookCardSectionLabel">
                            <p className="card-text">ISBN :</p>
                          </div>
                          <div className="col-sm-8 bookCardSectionData">
                            {<p className="card-text">{props.bookshelfObj.selectedBook.isbn} </p>}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 bookCardSectionLabel">
                            <p className="card-text">Descr :</p>
                          </div>
                          <div className="col-sm-8 bookCardSectionData">
                            {<p className="card-text">{props.bookshelfObj.selectedBook.description} </p>}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 bookCardSectionLabel">
                            <p className="card-text">URL :</p>
                          </div>
                          <div className="col-sm-8 bookCardSectionData">
                            {<a href={props.bookshelfObj.selectedBook.url}>{props.bookshelfObj.selectedBook.url}</a>}
                          </div>
                        </div>
                      </div>

                      <div className="bookCardData">
                        <div className="row">
                          <div className="col-sm-2 bookCardSectionLabel">
                            <p className="card-text">LastPage read :</p>
                          </div>
                          <div className="col-sm-8 bookCardSectionData">
                            {<p className="card-text">{props.bookshelfObj.selectedBook.pageNumber} </p>}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2 bookCardSectionLabel">
                            <p className="card-text">Comment :</p>
                          </div>
                          <div className="col-sm-8 bookCardSectionData">
                            {<p className="card-text">{props.bookshelfObj.selectedBook.comments} </p>}
                          </div>
                        </div>
                      </div>

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

module.exports = ViewPage

