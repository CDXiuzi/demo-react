/**
 * The component is login and register page.
 */

import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';

// resources.
import bg from '../../../resource/assets/bg.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  bgImage: {
    flex: 1,
    paddingTop: 20,
    overflow: 'visible'
  },
  buttomContainer: {
    position: 'absolute',
    right: 0,
    bottom: 100,
    left: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  loginButtomView: {
    width: 120,
    backgroundColor: '#ee5259'
  },
  regButtomView: {
    width: 120,
    backgroundColor: '#fff'
  },
  buttomTextCommom: {
    textAlign: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 14
  },
  loginButtomText: {
    color: '#fff'
  },
  regButtomText: {
    color: '#ee5259'
  }
});

class Base extends Component {

  static propTypes = {
    handleLogin: PropTypes.func.isRequired
  };

  render() {

    const { handleLogin } = this.props;

    return (
      <View style={styles.container}>
        <Image
          style={styles.bgImage}
          source={bg}
        />
        <View style={styles.buttomContainer}>
          <TouchableHighlight
            onPress={handleLogin}
          >
            <View style={styles.loginButtomView}>
              <Text style={[styles.buttomTextCommom, styles.loginButtomText]}>
                登录
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => {}}
          >
            <View style={styles.regButtomView}>
              <Text style={[styles.buttomTextCommom, styles.regButtomText]}>
                注册
              </Text>
            </View>
          </TouchableHighlight>

        </View>
      </View>
    );
  }
}

export default Base;
