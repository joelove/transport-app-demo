import { takeLatest, call, put } from 'redux-saga/effects';

import { CHECK_ARRIVALS } from '../constants/action-types/arrivals-action-types';

import { storeArrivals } from '../actions/arrivals-actions';
import { getArrivals } from '../services/api-service';

export function* checkArrivals({ payload }) {
  const arrivals = yield call(getArrivals, payload);

  yield put(storeArrivals(arrivals));
}

export default function* arrivalsFlow() {
  yield takeLatest(CHECK_ARRIVALS, checkArrivals);
}
