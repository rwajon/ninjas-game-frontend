import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Home from './Home/Home';
import Login from './Login/Login';
import Game from './Game/Game';
import Profile from './Profile/Profile';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/login" render={props => <Login {...props} />} />
    <Route exact path="/game" render={props => <Game {...props} />} />
    <Route exact path="/profile" render={props => <Profile {...props} />} />
  </Switch>
);
