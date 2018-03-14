import React, { Component } from 'react';
import './App.css';
var Twit = require('twit');
var T = new Twit({
  consumer_key:         'HlSvxCHIVJccYSBDV1oYB2E0H',
  consumer_secret:      'iNSEIm97IqsWMCcfZ01xzP1nAOY3QPAtEYozbnScYKmJ9lruuP',
  access_token:         '2387332320-naFN1qp9xEzZfieFH9zXnYiGzO7rQqx0HW0Zz9V',
  access_token_secret:  'LfjjdaNruMReO0BFryPrjTIMu6gbBSVCyH5Iz4qQRzDm6'
});

class App extends Component {
  state = {

  }

  componentWillMount() {
    var params = {
      q: 'rainbow',
      count: 2
    }
    T.get('search/tweets', params,  function (err, data, response) {
      console.log(data)
    })
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
