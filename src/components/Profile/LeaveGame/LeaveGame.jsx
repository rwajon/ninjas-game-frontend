import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../Common/Button';
import { socketIOClient } from '../../../helpers';
import { gameAction } from '../../../actions';

class LeaveGame extends Component {
  leaveGamingRoom = e => {
    const { profile } = this.props;
    socketIOClient.emit('leaveGame', profile.id);
    window.location.replace('/');
  };

  componentDidMount() {
    socketIOClient.on('leaveGame', userId => {
      const { leaveGame, members, profile } = this.props;
      socketIOClient.emit('leaveGame', userId);
      leaveGame(members.filter(member => member.id !== userId));
    });
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

const mapStateToProps = ({ game: { members }, user: { profile } }) => ({
  members,
  profile
});

export const mapDispatchToProps = dispatch => ({
  leaveGame: payload => dispatch(gameAction.leaveGame(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaveGame);
