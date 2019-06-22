import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Quiz.scss';
import success from '../../../assets/images/celebration.gif';
import failure from '../../../assets/images/nope.gif';
import { compareUser, socketIOClient } from '../../../helpers';
import { gameAction } from '../../../actions';
import Input from '../../commons/Input/Input';

class Quiz extends Component {
  state = {
    country: '',
    capital: '',
    answer: '',
    count: 1,
    message: '',
    image: '',
    question: ''
  };

  countDown() {
    const interval = setInterval(() => {
      const { seconds } = this.state;
      if (seconds === 0) {
        clearInterval(interval);
        this.changeQuestion();
      } else {
        this.setState({
          seconds: seconds - 1
        });
      }
    }, 1000);
  }

  componentDidMount() {
    socketIOClient.on('changeQuestion', updatedRoom => {
      const { count } = this.state;
      const { country, capital, question } = updatedRoom;
      const { onChangeQuestion, room, roomName } = this.props;
      if (roomName === updatedRoom.name && count < 10) {
        onChangeQuestion({ ...room, country, capital, question });
        this.setState({
          country,
          capital,
          question
        });
      }
    });

    socketIOClient.on('answerQuestion', (point, member, updatedRoom) => {
      const { saveGeographyAttempts, roomName } = this.props;
      if (roomName === updatedRoom.name) {
        saveGeographyAttempts(updatedRoom);
      }
    });

    socketIOClient.on('gameReplayed', room => {
      const { onReplayGame, roomName } = this.props;
      if (roomName === room.name) {
        onReplayGame(room);
      }
    });
  }

  changeQuestion = () => {
    const { roomName } = this.props;
    return socketIOClient.emit('changeQuestion', roomName);
  };

  handleChange = e => {
    this.setState({
      answer: e.target.value
    });
  };

  replayGame = () => {
    const { roomName, profile } = this.props;
    return socketIOClient.emit('replayGame', profile, roomName);
  };

  handleSubmit = e => {
    e.preventDefault();
    let message = '';
    let image = '';
    let point = 0;
    const {
      roomName,
      profile,
      room: { country, capital }
    } = this.props;
    const { answer } = this.state;

    if (capital.toLowerCase() === answer.toLowerCase()) {
      point = 1;
      image = success;
      message = '';
      socketIOClient.emit('answerQuestion', point, profile, roomName);
      this.changeQuestion();
    } else {
      point = 0;
      image = failure;
      message = `Sorry, the capital of "${country}" is "${capital}"`;
      socketIOClient.emit('answerQuestion', point, profile, roomName);
    }
    this.setState({
      answer: '',
      message,
      image
    });

    return message;
  };

  render() {
    const { room, profile } = this.props;
    const { answer, message } = this.state;
    return (
      <div className="grabGame shadow-3 radius-1 text-white black-opacity-3 small-v-padding shadow-5">
        <div className="card radius-3 bold large-text text-white center-align">
          {room.question}
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="card input-field">
            <Input
              name="name"
              type="text"
              value={answer}
              className="medium-text card grey-opacity"
              onChange={this.handleChange}
              autoComplete="off"
              placeholder="Type your answer here"
            />
          </div>
          <div className="card">
            <button
              type="submit"
              className="radius-4 button primary text-white center-align large-v-padding large-text small-h-margin"
            >
              Answer
            </button>
            {room.name === 'public' ? (
              <button
                type="button"
                onClick={e => this.changeQuestion()}
                className="radius-4 button primary text-white center-align large-v-padding large-text small-h-margin"
              >
                Next
              </button>
            ) : (
              ''
            )}
            {compareUser(profile, room.owner) ? (
              <span>
                <button
                  type="button"
                  onClick={e => this.changeQuestion()}
                  className="radius-4 button primary text-white center-align large-v-padding large-text small-h-margin"
                >
                  Next
                </button>
                <button
                  type="button"
                  onClick={e => this.replayGame()}
                  className="radius-4 button primary text-white center-align large-v-padding large-text small-h-margin"
                >
                  Reset
                </button>
              </span>
            ) : (
              ''
            )}

            {message ? (
              <div className="white text-black card radius-2 small-padding center-align grey-opacity">
                <h3>{message}</h3>
              </div>
            ) : (
              ''
            )}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({
  user: { profile },
  game: {
    attempts,
    geography: { countries },
    room
  }
}) => ({
  profile,
  countries,
  attempts,
  room
});

export const mapDispatchToProps = dispatch => ({
  saveGeographyAttempts: payload =>
    dispatch(gameAction.saveGeographyAttempts(payload)),
  onChangeQuestion: payload => dispatch(gameAction.changeQuestion(payload)),
  onReplayGame: payload => dispatch(gameAction.replayGame(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
