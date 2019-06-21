import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState';
import reducers from '../reducers';

const hostname = window.location.hostname;

export default createStore(
  reducers,
  initialState,
  hostname === 'localhost'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk)
);
