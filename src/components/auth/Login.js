/**
 * The component is login view.
 *
 * @author Seven Du <shiweidu@outlook.com>
 */

import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableHighlight } from 'react-native';

import accessIcon from '../../../resource/assets/user.png';
import passwordIcon from '../../../resource/assets/password.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec'
  },
  navBar: {
    paddingTop: 20,
    height: 48,
    backgroundColor: '#fff'
  },
  navBarContent: {
    height: 48,
    lineHeight: 48,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500'
  },
  textInput: {
    backgroundColor: '#fff',
    height: 56,
    paddingRight: 16,
    paddingLeft: 48
  },
  lineBox: {
    height: 1,
    backgroundColor: '#fff'
  },
  lineContext: {
    height: 1,
    position: 'relative',
    left: 16,
    backgroundColor: '#ececec'
  },
  loginBottomBox: {
    marginTop: 24,
    marginRight: 16,
    marginBottom: 16,
    marginLeft: 16,
    height: 42,
  },
  loginButtomText: {
    height: 42,
    lineHeight: 42,
    backgroundColor: '#ee5259',
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  },
  inputBox: {
    backgroundColor: '#fff',
    height: 56,
  },
  inputLeftIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    zIndex: 1,
    left: 16,
    top: 14
  },
  moreBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 16,
    paddingLeft: 16,
    marginTop: 16
  },
  moreBottomText: {
    color: '#4078c0'
  }
});

class Login extends Component {

  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    onChangeAccess: PropTypes.func.isRequired,
    onchangePassword: PropTypes.func.isRequired
  };

  render() {

    const { onLogin, onChangeAccess, onchangePassword } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navBarContent}>登录</Text>
        </View>

        <View style={[styles.inputBox, { marginTop: 48 }]}>
          <Image source={accessIcon} style={styles.inputLeftIcon}/>
          <TextInput
            style={styles.textInput}
            placeholder="手机号"
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={true}
            keyboardType="numeric"
            maxLength={11}
            onChangeText={onChangeAccess}
          />
        </View>

        <View style={styles.lineBox}>
          <View style={styles.lineContext} />
        </View>

        <View style={styles.inputBox}>
          <Image source={passwordIcon} style={styles.inputLeftIcon}/>
          <TextInput
            style={styles.textInput}
            placeholder="密码"
            autoCapitalize="none"
            autoCorrect={false}
            selectTextOnFocus={true}
            secureTextEntry={true}
            returnKeyLabel="done"
            onChangeText={onchangePassword}
          />
        </View>
         
        <TouchableHighlight
          style={styles.loginBottomBox}
          onPress={onLogin}
        >
          <Text
            style={styles.loginButtomText}
          >
            登录
          </Text>
        </TouchableHighlight>

        <View
          style={styles.moreBottom}
        >
          <Text style={styles.moreBottomText}>
            注册
          </Text>
          <Text style={styles.moreBottomText}>
            忘记密码?
          </Text>
        </View>

      </View>
    );
  }
}

export default Login;
