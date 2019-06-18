import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../assets/css/style.scss';
import './Game.scss';
import { gameAction } from '../../actions';
import Profile from '../Profile/Profile';
import Quiz from './Quiz/Quiz';
import success from '../../assets/images/celebration.gif';
import failure from '../../assets/images/nope.gif';
import Answer from '../Game/Answer/Answer';

class Game extends Component {
  checkAnswer = ({ country, answer }) => {
    const { countries } = this.props;
    let message = '';
    let image = failure;

    for (let i = 0; i < countries.length; i += 1) {
      if (
        countries[i].name.toLowerCase() === country.toLowerCase() &&
        countries[i].capital.toLowerCase() === answer.toLowerCase()
      ) {
        image = success;
        message = 'Congratulation';
        break;
      } else if (countries[i].name.toLowerCase() === country.toLowerCase()) {
        message = `Sorry, the capital of "${countries[i].name}" is "${
          countries[i].capital
        }"`;
        break;
      }
    }
    return { message, image };
  };

  handleSubmit = e => {
    e.preventDefault();
    const { submitAnswer } = this.props;
    const payload = {
      answer: e.target.answer.value,
      country: document.querySelector('#country').innerHTML
    };
    submitAnswer(payload);
    e.target.answer.value = '';
    return false;
  };

  render() {
    const { profile, answer, question } = this.props;

    const checkAnswer = Object.keys(answer).length
      ? this.checkAnswer(answer)
      : null;

    return (
      <div className="container">
        <div className="row">
          <div className="small-screen-4 medium-screen-1 large-screen-1">
            <Profile />
          </div>
          <div className="small-screen-4 medium-screen-3 large-screen-3 ">
            <div>
              <Quiz answer={answer} question={question} />
            </div>
            <div className="grey container shadow-2 radius-3">
              {checkAnswer ? (
                <div className="white card radius-2 small-padding center-align">
                  <h3>{checkAnswer.message}</h3>
                  <img src={checkAnswer.image} alt="" />
                </div>
              ) : (
                ''
              )}
            </div>
            <div className="clear" />
            {/* results */}
            <div className="row">
              <div className="black card radius-2">
                <Answer />
                <div className="divider" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  names: PropTypes.array.isRequired,
  removeName: PropTypes.func.isRequired
};

export const mapStateToProps = store => {
  return {
    names: store.game.names,
    countries: store.game.countries,
    answer: store.game.answer
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    submitName: name => dispatch(gameAction.submit(name)),
    removeName: id => dispatch(gameAction.remove(id)),
    submitAnswer: payload => dispatch(gameAction.submitAnswer(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
