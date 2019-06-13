import * as types from '../actions-types';

export const get = payload => ({
  type: types.user.GET_PROFILE,
  payload
});
