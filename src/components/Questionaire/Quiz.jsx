import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../assets/css/style.scss';
// import './Quiz.scss';
import { gameAction } from '../../actions';

class Game extends Component {
  state = {
    quiz: [
      { id: 1, question: 'capital city of rwanda', answer: 'kigali' },
      { id: 2, question: 'capital city of Uganda', answer: 'Kampala' },
      { id: 3, question: 'capital city of Burundi', answer: 'Bujumbura' },
      { id: 4, question: 'capital city of Mozambique', answer: 'Maputo' },
      { id: 5, question: 'capital city of Botswana', answer: 'Gaborone' }
    ],
    answered: [],
    input: ''
  };
  handleSubmit = e => {
    e.preventDefault();
    const { submitName } = this.props;
    submitName(e.target.name.value);

    return false;
  };
  render() {
    const { names, removeName } = this.props;
    return (
      <div className="container">
        <div className="container shadow-2 radius-3">
          <div className="center">
            <h1 className="primary text-white radius-2 uppercase large-padding center-align">
              Name Test
            </h1>

            <div className="quiz large-h-padding ">
              <div className="large-text medium-v-padding ">Question:</div>
              <div className="large-text large-padding text-grey">
                {this.state.quiz[2].question}
              </div>
              <form>
                <input
                  type="text"
                  placeholder="Enter your answer"
                  name="name"
                  id="name"
                  className="shadow-4 radius-2 large-v-padding card medium-text large-screen-3"
                />

                <br />
                <button
                  type="submit"
                  id="submit"
                  className="primary large-padding text-light large-text capitilize radius-5"
                >
                  submit
                </button>
              </form>
            </div>

            <div className="primary large-padding">
              <div className="container shadow-2 radius-3 large-padding">
                {names.map((name, key) => (
                  <div
                    id={key}
                    key={key}
                    className="white card radius-2 small-padding"
                  >
                    Hello {name}
                    <button
                      className="danger radius-2 small-padding text-white right"
                      onClick={() => removeName(key)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
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

export const mapStateToProps = ({ game: { names } }) => ({
  names
});

export const mapDispatchToProps = dispatch => ({
  submitName: name => dispatch(gameAction.submit(name)),
  removeName: id => dispatch(gameAction.remove(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
