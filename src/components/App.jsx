import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Background from '../components/Background/Backround'
function App() {
  return (
    <div>
      <Background />
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
