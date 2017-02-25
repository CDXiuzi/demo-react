/**
 * The class is app box.
 *
 * @author Seven Du <shiweidu@outlook.com>
 */

import React, { Component, PropTypes } from 'react';
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

  static propTypes = {
    statusBarSettings: PropTypes.object.isRequired
  };

  render() {
    const { children, statusBarSettings } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar {...statusBarSettings} />
        {children}
      </View>
    );
  }
}

export default Main;
