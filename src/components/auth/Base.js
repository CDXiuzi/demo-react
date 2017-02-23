/**
 * The component is login and register page.
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

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
    backgroundColor: '#ee5259',
  },
  regButtomView: {
    width: 120,
    backgroundColor: '#fff',
  }
});

class Base extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.bgImage}
          source={bg}
        />
        <View style={styles.buttomContainer}>
          <View style={styles.loginButtomView}>
            <Button
              title="登录"
              onPress={() => {}}
              color="#fff"
            />
          </View>
          <View style={styles.regButtomView}>
            <Button
              title="注册"
              onPress={() => {}}
              color="#ee5259"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Base;
