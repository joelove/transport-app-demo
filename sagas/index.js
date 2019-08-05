import { fork, all } from 'redux-saga/effects';

import testFlow from './test-saga';

export default function* rootSaga() {
  yield all([
    testFlow(),
  ]);
}
