import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Home from './Home/Home';
import Game from './Game/Game';

export const Routes = ({ isAuth }) => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => <Home {...props} isAuth={isAuth} />}
    />
    <Route
      exact
      path="/home"
      render={props => <Home {...props} isAuth={isAuth} />}
    />
    <Route
      exact
      path="/game"
      render={props => (isAuth ? <Game {...props} /> : <Home />)}
    />
  </Switch>
);

Routes.propTypes = {
  isAuth: PropTypes.bool
};

Routes.defaultProps = {
  isAuth: false
};

export const mapStateToProps = ({ user: { isAuth } }) => ({
  isAuth
});

export default connect(mapStateToProps)(Routes);
