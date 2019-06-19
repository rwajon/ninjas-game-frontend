import React, { Component } from 'react';
import '../../assets/css/style.scss';
import './Background.scss';

export default class Backround extends Component {
  render() {
    const height = window.innerHeight;
    const bgStyles = {
      height: `${height}px`
    };
    return (
      <div className="grabBody" style={bgStyles}>
        {''}
      </div>
    );
  }
}
