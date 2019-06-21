import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../commons/Button';
import { socketIOClient } from '../../../helpers';
import { gameAction } from '../../../actions';
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon
} from 'react-share';
import dotenv from 'dotenv';

dotenv.config();

class Share extends Component {
  render() {
    const { profile, room } = this.props;
    const { REACT_APP_URL_FRONTEND } = process.env;
    return (
      <div>
        <div className="container small-padding center-align radius-2">
          <div className="text-white medium-text">Share Gaming Room</div>
          <br />
          <EmailShareButton
            className="small-h-margin"
            style={{ display: 'inline-block', cursor: 'pointer' }}
            subject="Ninjas Guess Game"
            body={`Hello, ${profile.firstName} ${
              profile.lastName
            } invited you to play this game.`}
            url={`${REACT_APP_URL_FRONTEND}/game/${room.name}`}
            openWindow={true}
          >
            <EmailIcon size={45} round />
          </EmailShareButton>

          <FacebookShareButton
            className="small-h-margin"
            style={{ display: 'inline-block', cursor: 'pointer' }}
            subject="Ninjas Guess Game"
            url={`${REACT_APP_URL_FRONTEND}/game/${room.name}`}
            quote="Ninjas Guess Game"
          >
            <FacebookIcon size={45} round />
          </FacebookShareButton>

          <TwitterShareButton
            className="small-h-margin"
            style={{ display: 'inline-block', cursor: 'pointer' }}
            subject="Ninjas Guess Game"
            url={`${REACT_APP_URL_FRONTEND}/game/${room.name}`}
          >
            <TwitterIcon size={45} round />
          </TwitterShareButton>
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
)(Share);