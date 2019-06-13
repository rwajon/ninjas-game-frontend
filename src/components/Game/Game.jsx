import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../assets/css/style.scss';
import './Game.scss';
import { gameAction } from '../../actions';
import Profile from '../Profile/Profile';

class Game extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { submitName } = this.props;
    submitName(e.target.name.value);
    return false;
  };

  render() {
    const { names, removeName, profile } = this.props;
    return (
      <div className="container">
        <Profile profile={profile} />
        <div className="container shadow-2 radius-3">
          <div className="center">
            <h1 className="primary text-white uppercase large-padding center-align">
              Name Test
            </h1>
            <div className="large-padding">
              <form onSubmit={this.handleSubmit}>
                <div className="radius-2 medium-padding input-field">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    id="name"
                    className="shadow-4 radius-2 medium-padding card medium-text large-screen-3"
                  />

                  <button
                    type="submit"
                    id="submit"
                    className="radius-4 button radius-5 primary text-white center-align large-h-padding large-text"
                  >
                    Play Now
                  </button>
                </div>
                <br />
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
  profile: PropTypes.object.isRequired,
  removeName: PropTypes.func.isRequired
};

export const mapStateToProps = ({ game: { names }, user: { profile } }) => ({
  names,
  profile
});

export const mapDispatchToProps = dispatch => ({
  submitName: name => dispatch(gameAction.submit(name)),
  removeName: id => dispatch(gameAction.remove(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
