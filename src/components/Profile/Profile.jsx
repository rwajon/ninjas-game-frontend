import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import defaultPicture from '../../assets/images/profile_plaholder.png';
import '../../assets/css/style.scss';
import './Profile.scss';
import Logout from '../Logout/Logout';

export default class Profile extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="container">
        <div className="row shadow-3 ">
          <div className="grabProfileImage center">
            <img
              src={profile.image || defaultPicture}
              className="center shadow-4"
              alt="Profile"
            />
          </div>
          <div class="card center-align">
            <div className="text-info large-text">
              Hello,
              <br />{' '}
            </div>{' '}
            <h1>
              {profile.firstName} {profile.lastName}
            </h1>
          </div>
          <div className="clear" />

          <Logout />
        </div>
      </div>
    );
  }
}
