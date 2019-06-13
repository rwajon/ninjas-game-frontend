const isAuth = require('../helpers/isAuth');

module.exports = {
  game: {
    names: []
  },
  user: {
    profile: isAuth() || {},
    isAuth: isAuth() && true
  }
};
