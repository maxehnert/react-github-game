var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');


var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componetWillMount: function() {
    console.log('componetWillMount');
  },
  componentDidMount: function() {
    var query = this.props.location.query;
    // Fetch in from github then update state
    console.log('componentDidMount');
  },
  componentWillReceiveProps: function() {
    console.log('componentWillReceiveProps');
  },
  componentWillUnmount: function() {
    console.log('componentWillUnmount');
  },
  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
      />
    );
  }
});

module.exports = ConfirmBattleContainer;
