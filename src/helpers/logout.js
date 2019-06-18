export default () => {
  localStorage.user = '';
  localStorage.profile = '';
  localStorage.token = '';
  window.location.replace('/');
  return true;
};
