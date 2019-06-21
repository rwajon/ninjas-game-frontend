import { combineReducers } from 'redux';
import user from './userReducer';
import game from './gameReducer';
import room from './roomReducer';

export default combineReducers({
  user,
  game,
  room
});
