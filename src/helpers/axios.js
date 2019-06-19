import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
const { REACT_APP_URL_BACKEND } = process.env;
const HOST = `${window.location.protocol}//${window.location.hostname}:${
  window.location.port
}`;
export default ({ token, URL }) =>
  axios.create({
    baseURL:
      URL ||
      (REACT_APP_URL_BACKEND && `${REACT_APP_URL_BACKEND}/api/v1`) ||
      HOST,
    headers: {
      'access-token': token || localStorage.token || undefined
    }
  });
