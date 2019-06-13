import { game as initialState } from '../store/initialState';
import * as types from '../actions-types';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.user.GET_PROFILE:
      return {
        ...state,
        profile: payload
      };
    default:
      return state;
  }
};
