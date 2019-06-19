export default attempts => {
  return attempts.reduce((val, score) => val + score, 0);
};
