import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Members.scss';
import defaultPicture from '../../../assets/images/profile_plaholder.png';
import { socketIOClient } from '../../../helpers';
import { gameAction } from '../../../actions';

class Members extends Component {
  componentDidMount = () => {
    const { profile, roomName } = this.props;

    socketIOClient.emit('newMember', profile, roomName);

    socketIOClient.on('newMember', (member, room) => {
      const { addMember } = this.props;
      if (roomName === room.name) {
        addMember(room);
      }
    });
  };

  render() {
    const { room } = this.props;
    return (
      <div className="small-padding">
        {(room.members || []).map((member, index) => {
          return (
            <div
              className={`oneResult black-opacity-3 center-align radius-4`}
              key={index}
            >
              <img
                src={member.image || defaultPicture}
                className="shadow-4"
                alt="profile"
                style={{ width: '50px', borderRadius: '50%' }}
              />
              <b className="text-white">
                {member.firstName} {member.lastName}
              </b>
              <div className="grabDivPoints radius-1">
                {member.attempts.geography.length ? (
                  member.attempts.geography.map(score => (
                    <div className={`${score ? 'correct' : 'wrong'}`}>
                      &nbsp;
                    </div>
                  ))
                ) : (
                    <div style={{ width: '100%' }}>&nbsp;</div>
                  )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({
  game: { members, attempts, room },
  user: { profile }
}) => ({
  members,
  attempts,
  profile,
  room
});

export const mapDispatchToProps = dispatch => ({
  addMember: payload => dispatch(gameAction.addMember(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Members);
