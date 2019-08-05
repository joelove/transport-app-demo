import { connect } from 'react-redux';

import { checkArrivals } from '../actions/arrivals-actions';

export default connect(
  state => ({ ...state }),
  { checkArrivals },
);
