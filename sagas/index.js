import { fork, all } from 'redux-saga/effects';

import arrivalsFlow from './arrivals-saga';

export default function* rootSaga() {
  yield all([
    arrivalsFlow(),
  ]);
}
