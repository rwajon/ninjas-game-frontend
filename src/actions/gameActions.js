import * as types from '../actions-types';

export const saveGeographyAttempts = payload => {
  return {
    type: types.game.SAVE_GEOGRAPHY_ATTEMPTS,
    payload
  };
};

export const addMember = payload => {
  return {
    type: types.game.ADD_MEMBER,
    payload
  };
};

export const createRoom = payload => ({
  type: types.game.CREATE_ROOM,
  payload
});

export const changeQuestion = payload => {
  return {
    type: types.game.CHANGE_QUESTION,
    payload
  };
};

export const leaveGame = payload => {
  return {
    type: types.game.LEAVE_GAME,
    payload
  };
};

export const replayGame = payload => {
  return {
    type: types.game.REPLAY_GAME,
    payload
  };
};
