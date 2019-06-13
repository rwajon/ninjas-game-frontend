const isAuth = () => {
  const userCookie = document.cookie ? decodeURIComponent(document.cookie) : '';
  const user = userCookie.search('user=') >= 0 && userCookie.split('user=')[1];
  return user ? JSON.parse(user).user : null;
};

module.exports = isAuth;
