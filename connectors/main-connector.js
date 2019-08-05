import { connect } from 'react-redux';

import { testAction } from '../actions/test-actions';

export default connect(
  state => ({ ...state }),
  { testAction },
);
