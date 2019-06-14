import { userAction } from '../../actions';

describe('Actions', () => {
  test('User action', () => {
    const action = userAction.get({});
    expect(action).toHaveProperty('type');
    expect(action).toHaveProperty('payload');
  });

  test('User action', () => {
    const action = userAction.get();
    expect(action).toHaveProperty('type');
    expect(action).toHaveProperty('payload');
  });
});
