import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Title, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { pollArrivals } from './actions/arrivals-actions'

class Main extends Component {
  componentDidMount() {
    const { pollArrivals } = this.props;
    pollArrivals();
  }

  render() {
    return (
      <View style={styles.main}>
        <Text h1 style={styles.h1}>Arrivals</Text>
        {this.props.arrivals.map(
          ({ id, destinationName, lineName }) => (
            <Text key={id}>{lineName} {destinationName}</Text>
          )
        )}
      </View>
    );
  }
}

Main.propTypes = {
  arrivals: PropTypes.array.isRequired,
};

export default connect(
  state => ({ ...state }), {
    pollArrivals,
  },
)(Main);
