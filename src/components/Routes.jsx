import React from './node_modules/react';
import { Route, Switch } from './node_modules/react-router-dom';
import { connect } from './node_modules/react-redux';
import { PropTypes } from './node_modules/prop-types';

import Auth from './Auth/Auth';
import Home from './Home/Home';
import Game from './Game/Game';

export const Routes = ({ isAuth, profile }) => (
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
    <Route exact path="/auth/:token" render={props => <Auth {...props} />} />
    <Route
      exact
      path="/game"
      render={props => (isAuth && profile ? <Game {...props} /> : <Home />)}
    />
    <Route
      exact
      path="/game/:roomName"
      render={props => (isAuth && profile ? <Game {...props} /> : <Home />)}
    />
  </Switch>
);
Routes.propTypes = {
  isAuth: PropTypes.bool
};
Routes.defaultProps = {
  isAuth: false
};
export const mapStateToProps = ({ user: { isAuth, profile } }) => ({
  isAuth,
  profile
});
export default connect(mapStateToProps)(Routes);