import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import styles from './styles';
import mainConnector from './connectors/main-connector';

class Main extends Component {
  componentDidMount() {
    const { testAction } = this.props;

    testAction('foo');
  }

  render() {
    return (
      <View style={styles.main}>
        <Text>Lorem ipsum dolor sit amet, mother fucker!</Text>
      </View>
    );
  }
}

export default mainConnector(Main);
