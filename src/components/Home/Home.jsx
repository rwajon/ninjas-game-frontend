import React from 'react';
import './Home.scss';
import '../../assets/css/style.scss';
import logo from '../../assets/images/logo-01.png'
import ninja from '../../assets/images/ninja9.png'
import dotenv from 'dotenv';
dotenv.config();
export default class Home extends React.Component {
  render() {
    const { isAuth } = this.props;
    const { REACT_APP_URL_BACKEND } = process.env;
    return (
      <div className="grabLandingPage lights">

        <div className="row">
          <div className="container">
            <div className="grabName">
              <img src={logo} title="logo" alt="logo" />
              <br /><br /><br />
              <div className="center-align bold xxlarge-text text-white">
                <div className="large-padding">
                  Login to Play
                </div>
                <br /><br />
                <a
                  className="social-login radius-4 button danger radius-5 text-white large-h-padding large-text"
                  href={`${REACT_APP_URL_BACKEND}api/v1/auth/google`}
                >
                  Google
                </a>
                <a
                  className="social-login radius-4 button info radius-5 text-white large-h-padding large-text"
                  href={`${REACT_APP_URL_BACKEND}api/v1/auth/twitter`}
                >
                  Twitter
                </a>
                <a
                  className="social-login radius-4 button primary radius-5 text-white large-h-padding large-text"
                  href={`${REACT_APP_URL_BACKEND}api/v1/auth/facebook`}
                >
                  Facebook
                </a>
              </div>
            </div>
            <div className="grabGraphic">
              <img src={ninja} />
            </div>
          </div>
        </div>
        <div className="container hide">
          <div className="container shadow-2 radius-3">
            <div className="center">
              <div className="row">
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
      </div >
    );
  }
}
