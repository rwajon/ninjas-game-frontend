import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import defaultPicture from '../../assets/images/profile_plaholder.png';
import '../../assets/css/style.scss';
import './Profile.scss';
import Logout from '../Logout/Logout';
import Buttons from '../Buttons/Buttons';

export default class Profile extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="container">
        <div className="row shadow-3 black radius-4 text-white">
          <div className="grabProfileImage center">
            <img
              src={profile.image || defaultPicture}
              className="center shadow-4"
              alt="Profile"
            />
          </div>
          <div className="card no-margin center-align">
            <div className="text-info medium-text">
              Hello,
              <br />{' '}
            </div>{' '}
            <h1 className="no-margin medium-text">
              {profile.firstName} {profile.lastName}
            </h1>
          </div>
          <div className="clear" />
          <div className="medium-padding center-align">
            Result: 0/10
          </div>
          <div className="clear" />
          <Logout />
          <br />
        </div>
        <Buttons />
      </div>
    );
  }
}
