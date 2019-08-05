import { TEST_ACTION } from '../constants/action-types/test-action-types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEST_ACTION:
      return { ...state };
    default:
      return state;
  }
};
