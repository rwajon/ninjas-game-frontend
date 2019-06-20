import React, { Component } from './node_modules/react';
import { connect } from './node_modules/react-redux';
import './Quiz.scss';
import success from '../../../assets/images/celebration.gif';
import failure from '../../../assets/images/nope.gif';
import { geographyQuizGenerator } from '../../../helpers';
import { gameAction } from '../../../actions';
import Input from '../../commons/Input/Input';

class Quiz extends Component {
  state = {
    country: '',
    capital: '',
    question: '',
    answer: '',
    count: 1,
    message: '',
    image: ''
  };

  componentDidMount() {
    const { countries } = this.props;
    const { country, capital, question } = geographyQuizGenerator(countries);
    this.setState({
      country,
      capital,
      question
    });
  }

  changeQuestion = () => {
    const { countries } = this.props;
    const { count } = this.state;
    if (count < 10) {
      const { country, capital, question } = geographyQuizGenerator(countries);
      this.setState({
        country,
        question,
        capital,
        count: count + 1
      });
    }
    return count;
  };

  handleChange = e => {
    this.setState({
      answer: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let message = '';
    let image = '';
    const { saveGeographyAttempts } = this.props;
    const { answer, country, capital, count } = this.state;

    if (count < 10) {
      if (capital.toLowerCase() === answer.toLowerCase()) {
        image = success;
        message = 'Congratulation';
        saveGeographyAttempts(1);
      } else {
        image = failure;
        message = `Sorry, the capital of "${country}" is "${capital}"`;
        saveGeographyAttempts(0);
      }
      this.setState({
        answer: '',
        message,
        image
      });

      this.changeQuestion();
    }

    return message;
  };

  render() {
    const { count, question, answer, message, image } = this.state;
    return (
      <div className="grabGame row shadow-3 radius-1 text-white black-opacity-3 shadow-5">
        <div className="medium-v-padding ">
          <span className="danger large-h-padding radius-3 bold medium-text text-white center-align">
            {count} / 10
          </span>
          <br />
          <div className="primary card radius-3 bold large-text text-white center-align">
            {question}
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
              />
            </div>
            <div className="card">
              <button
                type="submit"
                className="submit radius-4 button radius-5 primary text-white center-align large-h-padding large-text"
              >
                Answer
              </button>
              <button
                type="button"
                onClick={e => this.changeQuestion()}
                className="submit radius-4 button radius-5 primary text-white center-align large-h-padding large-text"
              >
                Next
              </button>
              {message === false ? (
                <div className="white text-black card radius-2 small-padding center-align grey-opacity">
                  <h3>{message}</h3>
                  <img src={image} alt="" />
                </div>
              ) : (
                ''
              )}
            </div>
          </form>
          <br />
        </div>
        <div className="divider"> </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  game: {
    attempts,
    geography: { countries }
  }
}) => ({
  countries,
  attempts
});

export const mapDispatchToProps = dispatch => ({
  saveGeographyAttempts: payload =>
    dispatch(gameAction.saveGeographyAttempts(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
