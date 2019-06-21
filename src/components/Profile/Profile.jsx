import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as helper from '../../helpers';
import LeaveGame from './LeaveGame/LeaveGame';
import Logout from '../Logout/Logout';
import defaultPicture from '../../assets/images/profile_plaholder.png';
import '../../assets/css/style.scss';
import './Profile.scss';
import Room from './Room/Room';
import Share from './Share/Share';
import { compareUser } from '../../helpers';
import Input from '../commons/Input/Input';

export class Profile extends Component {
  state = {
    roomToJoin: ''
  };

  handleChange = e => {
    this.setState({
      roomToJoin: e.target.value
    });
  };

  render() {
    const { roomToJoin } = this.state;
    const { profile, room, roomName } = this.props;
    const member = (room.members || []).filter(member =>
      compareUser(member, profile)
    )[0];

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
          <div className="medium-padding center-align">
            Geography:{' '}
            {member
              ? `${helper.getScore(member.attempts.geography || [])} / ${
                  member.attempts.geography.length
                }`
              : '0 / 0'}
            <br />
            <br />
            Computing:{' '}
            {member
              ? `${helper.getScore(member.attempts.computing || [])} / ${
                  member.attempts.computing.length
                }`
              : '0 / 0'}
          </div>
          <div className="clear" />
          {room.name ? <LeaveGame roomName={roomName} /> : ''}
          {room.name ? '' : <Room />}
          <Logout />
          {room.name ? <Share roomName={roomName} /> : ''}
          <br />
          <div className="input-field center-align">
            <Input
              name="name"
              type="text"
              value={roomToJoin}
              className="medium-text grey-opacity"
              onChange={this.handleChange}
              placeholder="Type a room name"
            />
            <button
              onClick={() => {
                roomToJoin && window.location.replace(`/game/${roomToJoin}`);
              }}
              className="button danger large-text text-white radius-2 medium-h-margin medium-padding"
            >
              Join
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { profile }, game: { attempts, room } }) => ({
  profile,
  attempts,
  room
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  null
)(Profile);
