import React from 'react';
import { Route, Link } from 'react-router-dom';
import './Home.scss';
import '../../assets/css/style.scss';
import logo from '../../assets/images/logo-01.png';
import ninja from '../../assets/images/ninja9.png';
import { url as urlHelper } from '../../helpers';

export default class Home extends React.Component {
  render() {
    const { reactUrl, herokuUrl, defaultUrl } = urlHelper.backend;
    return (
      <div className="grabLandingPage lights">
        <div className="row">
          <div className="container">
            <div className="grabName">
              <img src={logo} title="logo" alt="logo" />
              <br />
              <br />
              <br />
              <div className="center-align bold xxlarge-text text-white">
                <Link
                  to="/game"
                  className="medium-padding radius-5 primary text-white"
                >
                  Play
                </Link>
                <br />
                <br />
                <a
                  className="social-login radius-4 button danger radius-5 text-white large-h-padding large-text"
                  href={`${reactUrl ||
                    herokuUrl ||
                    defaultUrl}/api/v1/auth/google`}
                >
                  Google
                </a>
                <a
                  className="social-login radius-4 button info radius-5 text-white large-h-padding large-text"
                  href={`${reactUrl ||
                    herokuUrl ||
                    defaultUrl}/api/v1/auth/twitter`}
                >
                  Twitter
                </a>
                <a
                  className="social-login radius-4 button primary radius-5 text-white large-h-padding large-text"
                  href={`${reactUrl ||
                    herokuUrl ||
                    defaultUrl}/api/v1/auth/facebook`}
                >
                  Facebook
                </a>
              </div>
            </div>
            <div className="grabGraphic">
              <img src={ninja} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
