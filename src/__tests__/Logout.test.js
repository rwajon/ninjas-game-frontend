import React from 'react';
import ReactDOM from 'react-dom';
import Logout from '../components/Logout/Logout';
import { Provider } from 'react-redux';
import store from '../store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Logout />, div);
  ReactDOM.unmountComponentAtNode(div);
});
