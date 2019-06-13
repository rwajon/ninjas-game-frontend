import React, { Component } from 'react';
import { connect } from 'react-redux';
import logout from '../../helpers/logout';

export default class Logout extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className="radius-4 button danger radius-5 text-white large-h-padding large-text"
          onClick={() => logout()}
        >
          Logout
        </button>
        <hr />
      </div>
    );
  }
}
