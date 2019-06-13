export default () => {
  const userCookie = document.cookie ? decodeURIComponent(document.cookie) : '';
  const user = userCookie.search('user=') >= 0 && true;
  if (user) {
    document.cookie = 'user=';
    window.location.replace('/');
  }
  return false;
};
