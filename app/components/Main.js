var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <divclassName='main-container'>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
