/**
 * The class is app launcher.
 *
 * @author Seven Du <shiweudu@outlook.com>
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class Launcher extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          加载中...
        </Text>
      </View>
    );
  }
}

export default Launcher;
