import { combineReducers } from 'redux';
import user from './userReducer';
import game from './gameReducer';

export default combineReducers({
  user,
  game
});
