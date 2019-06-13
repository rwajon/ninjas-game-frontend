import React from 'react';
import logo from '../../assets/images/ninjas.jpg';
import './Home.scss';
import '../../assets/css/style.scss';

export class Home extends React.Component {
  render() {
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
              <a
                className="radius-4 grey text-white large-h-padding large-text"
                href="/game"
              >
                Click here to play The Game
              </a>
              <hr />
              <br />
              <a
                className="social-login radius-4 primary text-white large-h-padding large-text"
                href="http://localhost:3000/api/v1/auth/facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                className="social-login radius-4 info text-white large-h-padding large-text"
                href="http://localhost:3000/api/v1/auth/twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                className="social-login radius-4 danger text-white large-h-padding large-text"
                href="http://localhost:3000/api/v1/auth/google"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gmail
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
