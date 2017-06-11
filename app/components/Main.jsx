const React = require('react');
const Nav = require('Nav');


const Main = React.createClass({
  render: function () {
    return (
      <div>
        <div>
          <Nav />
          <p>Main.jsx Rendered</p>
            { this.props.children }
        </div>
      </div>
    )
  }
});

module.exports = Main;
