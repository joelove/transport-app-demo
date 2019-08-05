import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Title, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import mainConnector from './connectors/main-connector';

class Main extends Component {
  componentDidMount() {
    const { checkArrivals } = this.props;
    checkArrivals();
  }

  render() {
    const { arrivals } = this.props;

    return (
      <View style={styles.main}>
        <Text h1 style={styles.h1}>Arrivals</Text>
        {arrivals.map(
          ({ id, expectedArrival, destinationName, lineName }) => (
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

export default mainConnector(Main);
