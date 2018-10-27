const React = require('react');
const Fragment = React.Fragment;

const IndexPage = (props) => {
  return (
    <Fragment>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Reading List</title>
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

          <header>

          </header>

          <div className="container ">

            <div className="jumbotron">
              <h1 className="text-center"><i className="fas fa-book-open"></i> Reading List</h1>
              <hr />
              <div className="text-center">
                <a href="/create">
                  <button className="btn btn-lg btn-primary navButton">
                    <span className="fas fa-plus-square"></span> Add
                  </button>
                </a>
                <a href="/update">
                  <button className="btn btn-lg btn-primary navButton">
                    <span className="fas fa-pencil-alt"></span> Update
                  </button>
                </a>
                <a href="/delete">
                  <button className="btn btn-lg btn-primary navButton">
                    <span className="fas fa-trash"></span> Delete
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
                      <h4>Book List</h4>
                    </div>
                    <div className="card-body">
                      <ul id="tableList" className="list-group">
                        {props.bookshelfObj.bookCollection.map((bk, index) =>
                          <li key={bk.id}>
                            <h2> Book #:  {parseInt(index) + 1} </h2>
                            <h5>Title: {bk.title}</h5>
                            <p>genre: {bk.genre}</p>
                            <p>Author: {bk.author}</p>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>


                </div>
              </div>

            </div>





          </div>

        </body>
      </html>
    </Fragment>
  )
}

module.exports = IndexPage