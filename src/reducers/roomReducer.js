import { game as initialState } from '../store/initialState';
import * as types from '../actions-types';

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case types.room.ADD_ONE:
      return {
        ...state,
        room: payload 
      };
    case types.room.SET_NAME:
      return {
        ...state,
        room: payload
      };
    default:
      return state;
  }
};
