import {
  CHECK_ARRIVALS,
  STORE_ARRIVALS,
} from '../constants/action-types/arrivals-action-types';

export const checkArrivals = (payload = {}) => ({
  type: CHECK_ARRIVALS,
  payload,
});

export const storeArrivals = (payload = {}) => ({
  type: STORE_ARRIVALS,
  payload,
});
