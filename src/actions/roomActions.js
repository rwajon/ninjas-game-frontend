import * as types from '../actions-types';

export const addOne = payload => ({
  type: types.room.ADD_ONE,
  payload
});

export const setName = payload => ({
  type: types.room.SET_NAME,
  payload
});
