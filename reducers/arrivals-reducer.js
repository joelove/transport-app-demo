import { STORE_ARRIVALS } from '../actions/arrivals-actions';

const INITIAL_STATE = [];

const storeArrivalsReducer = (state, { payload }) => ([ ...payload ]);

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_ARRIVALS:
      return storeArrivalsReducer(state, action);
    default:
      return state;
  }
};
