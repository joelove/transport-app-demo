import {
  TEST_ACTION,
} from '../constants/action-types/test-action-types';

export const testAction = (payload = {}) => ({
  type: TEST_ACTION,
  payload,
})
