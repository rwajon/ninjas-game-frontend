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
    e.target.answer.value = '';
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
        <div className="row">
          <div className="small-screen-4 medium-screen-1 large-screen-1">
            <Profile profile={profile} />
          </div>
          <div className="small-screen-4 medium-screen-3 large-screen-3">
            <div className="grabGame row shadow-3 black radius-4 text-white">
              <div className="medium-v-padding">
                <form onSubmit={this.handleSubmit}>
                  <div
                    id="question"
                    className="card radius-3 bold large-text text-white center-align"
                  >
                    {generatedQuestion.question}
                  </div>
                  <div id="country" className="hide">
                    {generatedQuestion.country}
                  </div>
                  <div className="row">
                    <div className="small-screen-3 medium-screen-3 large-screen-3">
                      <div className="input-field">
                        <input
                          type="text"
                          placeholder="Enter your answer"
                          name="answer"
                          id="name"
                          autoComplete="off"
                          className="shadow-4 radius-2 medium-padding card medium-text large-screen-3"
                        />
                      </div>
                    </div>
                    <div className="small-screen-1 medium-screen-1 large-screen-1">
                      <button
                        type="submit"
                        className="submit radius-4 button radius-5 primary text-white center-align large-h-padding large-text"
                      >
                        Answer
                  </button>
                    </div>
                  </div>
                  <div className="divider">{' '}</div>
                </form>
                <br />
              </div>
              <div className="divider">{' '}</div>
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
                <div className="large-padding">
                  <div className="oneResult wrong">
                    Gilles <span>Correct</span>
                  </div>
                  <div className="oneResult correct">
                    Gilles <span>Correct</span>
                  </div>
                  <div className="oneResult correct">
                    Gilles <span>Correct</span>
                  </div>
                </div>
                <div className="divider" />
              </div>
            </div>
          </div>
        </div >
      </div >

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
