import { createAction } from '../utilities';

export const CHECK_ARRIVALS = 'arrivals-actions/CHECK_ARRIVALS';
export const POLL_ARRIVALS = 'arrivals-actions/POLL_ARRIVALS';
export const STORE_ARRIVALS = 'arrivals-actions/STORE_ARRIVALS';

export const checkArrivals = createAction(CHECK_ARRIVALS);
export const pollArrivals = createAction(POLL_ARRIVALS);
export const storeArrivals = createAction(STORE_ARRIVALS);
