import logout from '../../helpers/logout';

describe('Logout', () => {
  test('logout', () => {
    const isLoggedout = logout();
    expect(isLoggedout).toBe(false);
  });
  test('logout', () => {
    document.cookie = 'user={user:{}}';
    const isLoggedout = logout();
    expect(isLoggedout).toBe(true);
  });
});
