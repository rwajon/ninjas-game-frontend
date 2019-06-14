import quizGenerator from '../../helpers/quizGenerator';

describe('Logout', () => {
  test('quiz generator', () => {
    const countries = [{ name: 'Rwanda', capital: 'Kigali' }];
    const question = quizGenerator(countries);
    expect(question).toHaveProperty('question');
    expect(question).toHaveProperty('country');
  });
});
