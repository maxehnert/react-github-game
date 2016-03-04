var axios = require('axios');

var id = 'CLIENT_ID';
var sec = 'SECRECT_ID';
var param = '?client_id=' + id + '&client_secret=' + sec;
function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param)
}
var helpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(function(username) {
      return getUserInfo(username)
    })).then(function(info) {
      return info.map(function(user) {
        return user.data;
      })
    })
  }
};

module.exports = helpers;
