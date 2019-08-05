import { STORE_ARRIVALS } from '../constants/action-types/arrivals-action-types';

const INITIAL_STATE = [];

const storeArrivalsReducer = (state, { payload }) => ([
  ...payload,
]);

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_ARRIVALS:
      return storeArrivalsReducer(state, action);
    default:
      return state;
  }
};
