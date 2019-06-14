import React, { Component } from 'react';
import logout from '../../helpers/logout';
import '../../assets/css/style.scss';

export default class Logout extends Component {
  render() {
    return (
      <div className="container">
        <div className="card center-align">
          <button
            type="button"
            className="radius-4 button danger radius-5 text-white large-h-padding shadow-3 large-text"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}
