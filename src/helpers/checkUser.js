module.exports = () => {
  return {
    profile: localStorage.profile ? JSON.parse(localStorage.profile) : {},
    isAuth: localStorage.token ? true : false
  };
};
