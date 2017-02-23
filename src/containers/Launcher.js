/**
 * The container of launcher.
 *
 * @author Seven Du <shiweidu@outlook.com>
 */

import React, { Component, PropTypes } from 'react';
import { AsyncStorage, Alert } from 'react-native';
import { connect } from 'react-redux';
import LauncherComponent from '../components/Launcher';

class Launcher extends Component {

  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  /**
   * The container render.
   *
   * @return {Object}
   * @author Seven Du <shiweidu@outlook.com>
   * @homepage http://medz.cn
   */
  render() {
    return (
      <LauncherComponent {...this.props} />
    );
  }

  /**
   * The component end run func.
   *
   * @author Seven Du <shiweidu@outlook.com>
   * @homepage http://medz.cn
   */
  componentDidMount() {
    const accessTokenKey = '@inyota:access-token';
    AsyncStorage.getItem(accessTokenKey)
      .then(token => this.doToken(token))
      .catch(() => {
        Alert.alert('应用运行错误，请卸载后重现安装！！！');
      });
  }

  doToken(token) {

    const { router } = this.props;
    const { replace } = router;

    if (!token) {
      replace('/base');
    }
  }
}

export default Launcher;
