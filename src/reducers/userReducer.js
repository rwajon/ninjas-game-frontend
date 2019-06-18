import { user as initialState } from '../store/initialState';
import * as types from '../actions-types';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.user.GET_PROFILE:
      return {
        ...state,
        profile: payload.profile,
        isAuth: payload.isAuth
      };
    case types.user.USER_ERRORS:
      return {
        ...state,
        errors: payload
      };
    default:
      return state;
  }
};
