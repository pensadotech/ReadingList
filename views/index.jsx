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

          <div className="container ">

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
                    <a href="/create">
                      <button className="btn btn-primary navButton">
                        <span className="fas fa-plus-square"></span> Add
                      </button>
                    </a>
                    <button id="btnEdit" type="submit" className="btn btn-primary navButton"
                      data-toggle="tooltip" title="view">
                      <span className="fas fa-edit"></span> Edit
                    </button>
                    <button id="btnDelete" type="submit" className="btn btn-primary navButton"
                      data-toggle="tooltip" title="view">
                      <span className="fas fa-trash"></span> Delete
                    </button>
                    <button id="btnView" type="submit" className="btn btn-primary navButton"
                      data-toggle="tooltip" title="view">
                      <span className="fas fa-book-open"></span> View
                    </button>
                    
                  </div>
                  <br />
                </div>
              </div>
            </div>

            <div className="transparentBg">

              <div className="row">
                <div className="col-lg-12">

                  <div className="card">
                    <div className="card-header"> <h4>Book List</h4> ( except for add, select a boook before the action ) </div>
                    <div className="card-body">
                      <ul id="tableList" className="list-group">
                        {
                          props.bookshelfObj.bookCollection.map((bk, index) =>
                            <li key={bk.id}>
                              <div className="row bookCardList solidBg">

                                <div className="col-sm-2">
                                  <h5 className="card-title">Book # {parseInt(index) + 1}</h5>
                                  <p>id#{bk.id}</p>
                                </div>
                                <div className="col-sm-8">
                                  <div className="card-block">
                                    <h3 className="card-title">{bk.title}</h3>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                      by {bk.author} - Year: {bk.year}, Genre: {bk.genre}, Rate: {bk.rate}, ISBN: {bk.isbn}
                                    </h6>
                                    <p className="card-text">{bk.description}</p>
                                  </div>
                                </div>
                                <div className="col-sm-2">
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <label htmlFor="form-check-input">Select</label>
                                      <input type="checkbox" className="form-check-input" data-value={bk.id} />
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </li>
                          )}

                      </ul>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

          <script src="./scripts/library.js" />
          <script src="./scripts/index.js" />

        </body>
      </html>
    </Fragment>
  )
}

module.exports = IndexPage