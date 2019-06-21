import { game as initialState } from '../store/initialState';
import * as types from '../actions-types';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.game.SAVE_GEOGRAPHY_ATTEMPTS:
      return {
        ...state,
        room: payload
      };
    case types.game.ADD_MEMBER:
      return {
        ...state,
        members: payload.members,
        room: payload
      };
    case types.game.LEAVE_GAME:
      return {
        ...state,
        members: payload.members,
        room: payload
      };
    case types.game.CHANGE_QUESTION:
      return {
        ...state,
        room: payload
      };
    case types.game.CREATE_ROOM:
      return {
        ...state,
        room: payload
      };
    case types.game.REPLAY_GAME:
      return {
        ...state,
        room: payload
      };
    default:
      return state;
  }
};
