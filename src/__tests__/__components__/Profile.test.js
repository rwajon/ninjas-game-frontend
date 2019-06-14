import React from 'react';
import ReactDOM from 'react-dom';
import Profile from '../../components/Profile/Profile';

it('renders without crashing', () => {
  const profile = {
    firstName: 'John',
    lastName: 'Smith',
    image: null
  };
  const div = document.createElement('div');
  ReactDOM.render(<Profile profile={profile} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
