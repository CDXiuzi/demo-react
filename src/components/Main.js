/**
 * The class is app box.
 *
 * @author Seven Du <shiweidu@outlook.com>
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class Main extends Component {
  render() {
    const { children } = this.props;

    return (
      <View style={styles.container}>
        {children}
      </View>
    );
  }
}

export default Main;
