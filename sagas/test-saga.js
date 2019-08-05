import { takeLatest, call } from 'redux-saga/effects';

import { TEST_ACTION } from '../constants/action-types/test-action-types';

export function* testSaga({ payload }) {
  // yield call(console.log, payload);
}

export default function* testFlow() {
  yield takeLatest(TEST_ACTION, testSaga);
}
