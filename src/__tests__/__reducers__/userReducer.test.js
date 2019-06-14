import useReducer from '../../reducers/userReducer';
import initialState from '../../store/initialState';
import * as types from '../../actions-types';

describe('Reducers', () => {
  test('User reducer', () => {
    const reducer = useReducer(initialState, {
      type: types.user.GET_PROFILE,
      payload: {}
    });
    expect(reducer).toHaveProperty('game');
    expect(reducer).toHaveProperty('user');
  });
});
