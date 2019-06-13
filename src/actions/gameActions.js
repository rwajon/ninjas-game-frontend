import * as types from '../actions-types';

export const get = payload => ({
  type: types.game.SUBMIT_NAME,
  payload
});

export const submit = payload => dispatch => dispatch(get(payload));
export const remove = payload => ({
  type: types.game.REMOVE_NAME,
  payload
});
