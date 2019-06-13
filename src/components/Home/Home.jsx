import React from 'react';
import logo from '../../assets/images/ninjas.jpg';
import './Home.scss';
import '../../assets/css/style.scss';

export default class Home extends React.Component {
  render() {
    const { isAuth } = this.props;
    return (
      <div className="container App">
        <div className="container shadow-2 radius-3">
          <div className="center">
            <h1 className="primary text-white radius-2 uppercase large-padding center-align">
              Name Test
            </h1>
            <div className="large-padding">
              <img src={logo} className="App-logo" alt="logo" />
              <hr />
              <br />
              <a
                className="radius-4 button primary radius-5 text-white large-h-padding large-text"
                href={
                  isAuth
                    ? '/game'
                    : 'http://localhost:3000/api/v1/auth/facebook'
                }
              >
                Click here to play The Game
              </a>
              <br />
              <br />
              <hr />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
