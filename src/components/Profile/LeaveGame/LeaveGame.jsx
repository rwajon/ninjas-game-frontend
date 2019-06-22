import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../commons/Button';
import { socketIOClient } from '../../../helpers';
import { gameAction } from '../../../actions';

class LeaveGame extends Component {
  leaveGamingRoom = e => {
    const { profile, roomName } = this.props;
    socketIOClient.emit('leaveGame', profile, roomName);
    window.location.replace('/game');
  };

  componentDidMount() {
    socketIOClient.on('leftGame', room => {
      const { leaveGame, roomName } = this.props;
      if (roomName === room.name) {
        leaveGame(room);
      }
    });
  }

  componentDidUpdate() {
    const {
      room: { members }
    } = this.props;
    if (!members.length) {
      window.location.replace('/game');
    }
  }

  render() {
    return (
      <div className="container">
        <div className="card center-align">
          <Button
            text="Leave"
            type="button"
            onClick={this.leaveGamingRoom}
            className="radius-4 button danger radius-5 text-white large-h-padding shadow-3 large-text"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ game: { members, room }, user: { profile } }) => ({
  members,
  profile,
  room
});

export const mapDispatchToProps = dispatch => ({
  leaveGame: payload => dispatch(gameAction.leaveGame(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaveGame);
