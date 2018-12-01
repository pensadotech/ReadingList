const React = require('react');
const Fragment = React.Fragment;

const HeaderChild = () =>
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

module.exports = HeaderChild