import axios from 'axios';

import {
  API_BASE_URL,
  API_ARRIVALS_PATH,
} from '../constants/urls';

const HEADERS = {
  'content-type': 'application/json',
  'app-key': process.env.APP_KEY,
  'app-id': process.env.APP_ID,
};

const http = axios.create({
  baseURL: API_BASE_URL,
  headers: HEADERS,
});

export const getArrivals = async () => {
  const { data } = await http
    .get(API_ARRIVALS_PATH)
    .catch(console.error);

  return data;
}
