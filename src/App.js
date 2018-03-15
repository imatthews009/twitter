import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Tweet from './Components/Tweet/Tweet'


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
    return (
      (this.state.tweets.map((tweet) => {
        return (
          <Tweet 
                text={tweet.text}
                id={tweet.id_str}/>
              )
      }))
    );
  }
}

export default App;
