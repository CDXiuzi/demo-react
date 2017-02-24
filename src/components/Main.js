/**
 * The class is app box.
 *
 * @author Seven Du <shiweidu@outlook.com>
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
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
        <StatusBar
          backgroundColor="rgba(0, 0, 0, .4)"
          barStyle="light-content"
          translucent={true}
        />
        {children}
      </View>
    );
  }
}

export default Main;
