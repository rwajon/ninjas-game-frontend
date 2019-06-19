import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Members.scss';
import defaultPicture from '../../../assets/images/profile_plaholder.png';
import { socketIOClient } from '../../../helpers';
import { gameAction } from '../../../actions';

class Members extends Component {
  componentDidMount = () => {
    const { profile, addMember, members } = this.props;

    addMember({ member: profile, members });
    // socketIOClient.emit('newMember', profile, members);

    socketIOClient.on('newMember', (member, allMembers) => {
      const { profile, addMember, members } = this.props;
      // addMember({ member, members });
      // socketIOClient.emit('newMember', profile, members);
      if (member.id !== profile.id) {
        // addMember({ member, members });
        console.log('member --> one', member);
        console.log('members --> one', members);
      } else {
        // addMember({ member, members: allMembers });
        addMember({ member, members, allMembers });
        console.log('members --> two', allMembers);
        // socketIOClient.emit('newMember', member, members);
      }
    });
  };

  componentDidUpdate() {
    // socketIOClient.emit('newMember', profile, members);
    const { profile, addMember, members } = this.props;
    socketIOClient.emit('newMember', profile, members);
  }

  render() {
    const { members, attempts } = this.props;
    return (
      <div className="small-padding">
        {members.map((member, index) => {
          return (
            <div className={`oneResult center-align radius-4`} key={index}>
              <img
                src={member.image || defaultPicture}
                className="center shadow-4 left"
                alt="profile"
                style={{ width: '50px', borderRadius: '50%' }}
              />
              <b className="text-black">
                {member.firstName} {member.lastName}
              </b>
              <div className="grabDivPoints white radius-1">
                {attempts.geography.length ? (
                  attempts.geography.map(score => (
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
  game: { members, attempts },
  user: { profile }
}) => ({
  members,
  attempts,
  profile
});

export const mapDispatchToProps = dispatch => ({
  addMember: payload => dispatch(gameAction.addMember(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Members);
