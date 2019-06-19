import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../assets/css/style.scss';
import './Game.scss';
import Profile from '../Profile/Profile';
import Quiz from './Quiz/Quiz';
import Members from '../Game/Members/Members';

class Game extends Component {
  render() {
    const {
      match: {
        params: { roomName }
      }
    } = this.props;
    return (
      <div className="container">
        <div className="small-screen-4 medium-screen-1 large-screen-1">
          <Profile roomName={roomName} />
        </div>
        {roomName ? (
          <div className="small-screen-4 medium-screen-3 large-screen-3 ">
            <div>
              <Quiz roomName={roomName} />
            </div>
            <div className="row">
              <div className="card radius-2">
                <Members roomName={roomName} />
                <div className="divider" />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

Game.propTypes = {};

const mapStateToProps = ({ user: { profile } }) => ({
  profile
});
export const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  null
)(Game);
