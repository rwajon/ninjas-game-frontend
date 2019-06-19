import dotenv from 'dotenv';

dotenv.config();

const port = window.location.port;
const protocol = window.location.protocol;
const hostname = window.location.hostname;
const { REACT_APP_URL_BACKEND } = process.env;
const { REACT_APP_URL_FRONTEND } = process.env;

const frontend = {
  reactUrl: REACT_APP_URL_FRONTEND,
  herokuUrl: 'https://ninjas-game.herokuapp.com',
  amazonUrl: 'http://ninja-guess-game.s3-website.us-east-2.amazonaws.com',
  defaultUrl: `${protocol}//${hostname}${port ? `:${port}` : ''}`
};

const backend = {
  reactUrl: REACT_APP_URL_BACKEND,
  herokuUrl: 'https://ninjas-game-backend.herokuapp.com',
  defaultUrl: `${protocol}//${hostname}${port ? `:${port}` : ''}`
};

export { frontend, backend };
