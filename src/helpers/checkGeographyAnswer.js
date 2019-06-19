export default ({ country, answer }, failure, success) => {
  const { countries } = this.props;
  let message = '';
  let image = failure;

  for (let i = 0; i < countries.length; i += 1) {
    if (
      countries[i].name.toLowerCase() === country.toLowerCase() &&
      countries[i].capital.toLowerCase() === answer.toLowerCase()
    ) {
      image = success;
      message = 'Congratulation';
      break;
    } else if (countries[i].name.toLowerCase() === country.toLowerCase()) {
      message = `Sorry, the capital of "${countries[i].name}" is "${
        countries[i].capital
      }"`;
      break;
    }
  }
  return { message, image };
};
