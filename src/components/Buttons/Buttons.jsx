import React, { Component } from 'react';
import '../../assets/css/style.scss';

export default class Buttons extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="container">
        <br />
        <div className="row text-white">
          <div className="card no-margin center-align">
            <button
              type="button"
              className="radius-4 button danger radius-5 text-white large-h-padding shadow-3 large-text"
            >
              End Game
          </button>
            <div className="clear" />
            <br />
            <button
              type="button"
              className="radius-4 button danger radius-5 text-white large-h-padding shadow-3 large-text"
            >
              Leave
          </button>
          </div>
          <div className="clear" />
          <br />
        </div>

      </div>
    );
  }
}
