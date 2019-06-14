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
            Capital City Challenge
            </h1>
            <div className="large-padding">
              <img src={logo} className="App-logo" alt="logo" />
              <hr />
              <br />
              <a
                className="radius-4 button primary radius-5 text-white large-h-padding large-text"
                href="/game"
              >
                {isAuth ? 'Click here to play The Game' : 'Login to play'}
              </a>
              <br />
              <br />
              <hr />
              <div className={isAuth ? 'hide' : ''}>
                <br />
                <a
                  className="social-login radius-4 button danger radius-5 text-white large-h-padding large-text"
                  href="http://localhost:3000/api/v1/auth/google"
                >
                  Google
                </a>
                <a
                  className="social-login radius-4 button info radius-5 text-white large-h-padding large-text"
                  href="http://localhost:3000/api/v1/auth/twitter"
                >
                  Twitter
                </a>
                <a
                  className="social-login radius-4 button primary radius-5 text-white large-h-padding large-text"
                  href="http://localhost:3000/api/v1/auth/facebook"
                >
                  Facebook
                </a>
                <br />
                <br />
                <hr />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
