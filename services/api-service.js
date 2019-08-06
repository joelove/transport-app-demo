import axios from 'axios';

const API_BASE_URL = 'https://api.tfl.gov.uk';
const API_ARRIVALS_PATH = 'stopPoint/490005183E/arrivals';

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
