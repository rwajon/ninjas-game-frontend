import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../assets/css/style.scss';
import './Game.scss';
import { gameAction } from '../../actions';
import * as helper from '../../helpers';
import Profile from '../Profile/Profile';
import Quiz from './Quiz/Quiz';
import Answer from '../Game/Answer/Answer';
import Members from '../Game/Members/Members';
import socketIOClient from '../../helpers/socketIOClient';

class Game extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="small-screen-4 medium-screen-1 large-screen-1">
            <Profile />
          </div>
          <div className="small-screen-4 medium-screen-3 large-screen-3 ">
            <div>
              <Quiz />
            </div>
            <div className="row">
              <div className="black card radius-2">
                <Members />
                <div className="divider" />
              </div>
            </div>
          </div>
        </div>
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
