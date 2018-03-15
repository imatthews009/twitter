import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Tweet from './Components/Tweet/Tweet'
import './App.css'


class App extends Component {
  state = {
    tweets: []
  }

  componentWillMount() {
    axios.get("https://conan-api.herokuapp.com/")
        .then(res => {
            console.log(res.data);
            this.setState({tweets: res.data})
        });
  }

  render() {
    const displayTweets = this.state.tweets.map((tweet) => <Tweet 
                                                        text={tweet.text}
                                                        id={tweet.id_str}
                                                        date={tweet.created_at}/>
  )
    return (
      <div>
        <h1>Conan Tweets</h1>
        {displayTweets}
      </div>

    );
  }
}

export default App;
