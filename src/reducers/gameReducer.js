import { game as initialState } from '../store/initialState';
import * as types from '../actions-types';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.game.SAVE_GEOGRAPHY_ATTEMPTS:
      return {
        ...state,
        attempts: {
          ...state.attempts,
          geography: [...state.attempts.geography, payload]
        }
      };
    case types.game.ADD_MEMBER:
      return {
        ...state,
        members: payload
      };
    case types.game.LEAVE_GAME:
      return {
        ...state,
        members: payload
      };
    default:
      return state;
  }
};
