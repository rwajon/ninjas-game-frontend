module.exports = () => {
  const userCookie =
    document.cookie.search('user=') >= 0
      ? document.cookie.split('user=')[1]
      : null;

  if (userCookie) {
    localStorage.user = decodeURIComponent(userCookie).split(';')[0];
    document.cookie = 'user=';
  }

  return {
    profile: localStorage.user ? JSON.parse(localStorage.user).profile : {},
    isAuth: localStorage.user ? true : false
  };
};
