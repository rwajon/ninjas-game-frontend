import dotenv from 'dotenv';
import socketIOClient from 'socket.io-client';

dotenv.config();

const { REACT_APP_URL_BACKEND } = process.env;
const HOST = `${window.location.protocol}//${window.location.hostname}:${
  window.location.port
}`;

export default socketIOClient(REACT_APP_URL_BACKEND || HOST);
