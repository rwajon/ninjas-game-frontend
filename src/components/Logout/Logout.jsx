import React, { Component } from 'react';
import { connect } from 'react-redux';
import logout from '../../helpers/logout';
import Button from '../commons/Button';
import '../../assets/css/style.scss';

export default class Logout extends Component {
  render() {
    return (
      <div className="container">
        <div className="card center-align">
          <Button
            text="Logout"
            type="button"
            onClick={logout}
            className="radius-4 button danger radius-5 text-white large-h-padding shadow-3 large-text"
          />
        </div>
      </div>
    );
  }
}
