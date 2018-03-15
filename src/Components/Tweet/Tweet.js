import React from 'react';
import './Tweet.css';


export default class Tweet extends React.Component {
  openTwitterLink = () => {
    window.open("https://twitter.com/ConanOBrien/status/" + this.props.id)
  }
  render() {

    return (
      <div className="tweet" onClick={this.openTwitterLink}>
        <h1>{this.props.text}</h1>
      </div>
    )
  }
}