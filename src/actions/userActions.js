import * as types from '../actions-types';
import * as helper from '../helpers';

export const getProfile = ({ id, token }) => {
  return async dispatch => {
    return helper
      .axios({
        token
      })
      .get(`/users/${id || ''}`)
      .then(({ data }) => {
        if (data.user) {
          localStorage.token = token;
          localStorage.profile = JSON.stringify(data.user);
          return dispatch({
            type: types.user.GET_PROFILE,
            payload: { profile: data.user, isAuth: true }
          });
        }
        return data;
      })
      .catch(err => {
        return dispatch({
          type: types.user.USER_ERRORS,
          payload:
            err.response.data.message ||
            err.response.data.errors ||
            err.response.data.error
        });
      });
  };
};
