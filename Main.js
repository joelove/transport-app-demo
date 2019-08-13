import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Title, View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { pollArrivals } from './actions/arrivals-actions'

class Main extends Component {
  componentDidMount() {
    const { pollArrivals } = this.props;
    pollArrivals();
  }

  render() {
    const arrivals = this.props.arrivals.slice().sort(
      (a, b) => a.expectedArrival.localeCompare(b.expectedArrival)
    );

    return (
      <View style={styles.main}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text h1 style={styles.h1}>Arrivals Board</Text>
        <Text h2 style={styles.h2}>Stop GA (Balgonie Road)</Text>
        {arrivals.map(
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
