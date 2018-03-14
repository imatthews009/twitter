import React, { Component } from 'react';
import './App.css';
// var Twit = require('twit');
// var T = new Twit({
//   consumer_key:         'HlSvxCHIVJccYSBDV1oYB2E0H',
//   consumer_secret:      'iNSEIm97IqsWMCcfZ01xzP1nAOY3QPAtEYozbnScYKmJ9lruuP',
//   access_token:         '2387332320-naFN1qp9xEzZfieFH9zXnYiGzO7rQqx0HW0Zz9V',
//   access_token_secret:  'LfjjdaNruMReO0BFryPrjTIMu6gbBSVCyH5Iz4qQRzDm6'
// });

var request = require('request');
var consumer_key = 'HlSvxCHIVJccYSBDV1oYB2E0H';
var consumer_secret = 'iNSEIm97IqsWMCcfZ01xzP1nAOY3QPAtEYozbnScYKmJ9lruuP';
var encode_secret = new Buffer(consumer_key + ':' + consumer_secret).toString('base64');

class App extends Component {
  state = {

  }

  componentWillMount() {
    // var params = {
    //   q: 'rainbow',
    //   count: 2
    // }
    // T.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2',  function (err, data, response) {
    //   console.log(data)
    // })

    var options = {
      url: 'https://api.twitter.com/oauth2/token',
      headers: {
          'Authorization': 'Basic ' + encode_secret,
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
      body: 'grant_type=client_credentials'
    };

    request.post(options, function(error, response, body) {
      console.log(body); // <<<< This is your BEARER TOKEN !!!
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Test</h1>
      </div>
    );
  }
}

export default App;
