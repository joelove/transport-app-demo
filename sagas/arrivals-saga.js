import { take, call, put, fork, delay } from 'redux-saga/effects';

import {
  CHECK_ARRIVALS,
  POLL_ARRIVALS,
  storeArrivals,
} from '../actions/arrivals-actions';

import { getArrivals } from '../services/api-service';

const ONE_SECOND = 1000;
const TEN_SECONDS = 10 * ONE_SECOND;

export function* pollArrivals(payload) {
  yield call(checkArrivals, payload);
  yield delay(TEN_SECONDS);
  yield call(pollArrivals, payload);
}

export function* checkArrivals(payload) {
  const arrivals = yield call(getArrivals, payload);
  yield put(storeArrivals(arrivals));
}

export default function* arrivalsFlow() {
  const { type, payload } = yield take([
    CHECK_ARRIVALS,
    POLL_ARRIVALS,
  ]);

  switch (type) {
    case CHECK_ARRIVALS:
      return yield fork(checkArrivals, payload)
    case POLL_ARRIVALS:
      return yield fork(pollArrivals, payload)
  }
}
