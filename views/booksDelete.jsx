const React = require('react');
const Fragment = React.Fragment;

const DeletePage = () => {
  return (
    <Fragment>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Delete book</title>
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
              <h2 className="text-center">Delete book</h2>
              <hr />
              <div className="text-center">
                <a href="/">
                  <button className="btn btn-lg btn-default">
                    <span className="fa fa-home"></span>
                  </button>
                </a>
              </div>
              <br />

            </div>

            <div className="transparentBg">
              <div className="row">
                <div className="col-lg-12">

                </div>
              </div>
            </div>

          </div>

        </body>
      </html>
    </Fragment >
  )
}

module.exports = DeletePage

