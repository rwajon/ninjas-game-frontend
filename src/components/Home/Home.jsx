import React from 'react';
import logo from '../../assets/images/ninjas.jpg';
import './Home.scss';

export class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <section className="App-section">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="http://localhost:3000/api/v1/auth/facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to play The Game
          </a>
        </section>
      </div>
    );
  }
}

export default Home;
