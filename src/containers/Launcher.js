/**
 * The container of launcher.
 *
 * @author Seven Du <shiweidu@outlook.com>
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LauncherComponent from '../components/Launcher';

const mapStateToProps = state => ({
  uid: state.uid
});

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
    let { uid } = this.props;
    console.log(uid);
  }
}

export default connect(mapStateToProps)(Launcher);
