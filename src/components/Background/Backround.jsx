import React, { Component } from 'react'
import '../../assets/css/style.scss';
import './Background.scss';

export default class Backround extends Component {
  render() {
    const height = window.innerHeight;
    // const colors = [
    //   '#FFB426',
    //   '#0E152E',
    //   '#420D3B',
    //   '#BD243E'
    // ];
    // const color = colors[Math.floor(Math.random() * colors.length)];
    const bgStyles = {
      'height': `${height}px`,
      // 'background': color
    }
    return (
      <div className="grabBody" style={bgStyles}>
        {''}
      </div>
    )
  }
}
