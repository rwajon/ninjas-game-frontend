import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logout from '../Logout/Logout';
import Levels from '../Levels/Levels';
import defaultPicture from '../../assets/images/profile_plaholder.png';
import '../../assets/css/style.scss';
import './Profile.scss';

export class Profile extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    const { profile } = this.props;
    return (
      <div className="container">
        <div className="row shadow-3 black-opacity-3 radius-4 text-white">
          <div className="grabProfileImage center">
            <img
              src={profile.image || defaultPicture}
              className="center shadow-4"
              alt="Profile"
            />
          </div>
          <div className="card no-margin center-align">
            <h1 className="no-margin medium-text">
              {profile.firstName} {profile.lastName}
            </h1>
          </div>
          <div className="clear" />
          <div className="medium-padding center-align">Result: 0/10</div>
          <div className="clear" />
          <Logout />
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { profile } }) => ({
  profile
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
