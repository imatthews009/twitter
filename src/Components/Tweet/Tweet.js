import React from 'react';
import './Tweet.css';


export default class Tweet extends React.Component {
  openTwitterLink = () => {
    window.open("https://twitter.com/ConanOBrien/status/" + this.props.id, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
  }
  render() {

    return (
      <div className="tweet" onClick={this.openTwitterLink}>
        <h3>{this.props.text.replace("&amp;", "&")}</h3>
        <h5>{this.props.date.split(' ').slice(0, 3).join(' ')}</h5>
      </div>
    )
  }
}