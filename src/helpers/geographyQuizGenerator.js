export default countries => {
  const key = Math.ceil(Math.random() * (countries.length - 1));

  return {
    question: `What is the capital of ${countries[key].name} ?`,
    country: countries[key].name,
    capital: countries[key].capital
  };
};
