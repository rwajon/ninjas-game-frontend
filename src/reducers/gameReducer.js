import { game as initialState } from '../store/initialState';
import * as types from '../actions-types';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.game.SUBMIT_NAME:
      return {
        ...state,
        names: [...state.names, payload]
      };
    case types.game.REMOVE_NAME:
      return {
        ...state,
        names: state.names.filter((name, key) => key !== parseInt(payload, 10))
      };

    case types.game.SUBMIT_ANSWER:
      return {
        ...state,
        answer: { country: payload.country, answer: payload.answer }
      };
    default:
      return state;
  }
};
