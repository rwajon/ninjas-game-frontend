import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../assets/css/style.scss';
import './Game.scss';
import { gameAction } from '../../actions';
import Profile from '../Profile/Profile';
import quizGenerator from '../../helpers/quizGenerator';
import success from '../../assets/images/celebration.gif';
import failure from '../../assets/images/nope.gif';

class Game extends Component {
  changeQuestion = e => {
    e.preventDefault();
    const { countries } = this.props;
    const { question, country } = quizGenerator(countries);

    document.querySelector('#question').innerHTML = question;
    document.querySelector('#country').innerHTML = country;
    return question;
  };

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
    return false;
  };

  render() {
    const { profile, countries, answer } = this.props;
    const generatedQuestion = quizGenerator(countries);
    const checkAnswer = Object.keys(answer).length
      ? this.checkAnswer(answer)
      : null;

    return (
      <div className="container">
        <Profile profile={profile} />
        <div className="container shadow-2 radius-3">
          <div className="center">
            <h3 className="primary text-white uppercase large-padding center-align">
              Name Test
            </h3>
            <div className="large-padding">
              <form onSubmit={this.handleSubmit}>
                <div className="radius-2 medium-padding input-field">
                  <div
                    id="question"
                    className="info text-white large-padding center-align"
                  >
                    {generatedQuestion.question}
                  </div>
                  <div id="country" className="hide">
                    {generatedQuestion.country}
                  </div>
                  <div className="card">
                    <input
                      type="text"
                      placeholder="Enter your answer"
                      name="answer"
                      id="name"
                      className="shadow-4 radius-2 medium-padding card medium-text large-screen-3"
                    />
                  </div>
                  <br />
                  <div className="card">
                    <button
                      type="submit"
                      className="submit radius-4 button radius-5 primary text-white center-align large-h-padding large-text"
                    >
                      Answer
                    </button>
                    <button
                      onClick={this.changeQuestion}
                      className="submit radius-4 button radius-5 primary text-white center-align large-h-padding large-text"
                    >
                      Skip
                    </button>
                  </div>
                </div>
              </form>
              <div className="primary large-padding">
                <div className="container shadow-2 radius-3 large-padding">
                  {checkAnswer ? (
                    <div className="white card radius-2 small-padding center-align">
                      <h3>{checkAnswer.message}</h3>
                      <img src={checkAnswer.image} alt="" />
                    </div>
                  ) : (
                    ''
                  )}
                </div>
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
  profile: PropTypes.object.isRequired,
  removeName: PropTypes.func.isRequired
};

export const mapStateToProps = store => {
  return {
    names: store.game.names,
    profile: store.user.profile,
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
