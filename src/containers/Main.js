/**
 * The component is app box container.
 *
 * @author Seven Du <shiweidu@outlook.com>
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainComponent from '../components/Main';
import { STATUS_BAR } from '../actions/types';

const mapStateToProps = state => ({
  statusBarSettings: state[STATUS_BAR]
});

class Main extends Component {
  render() {
    const { children, statusBarSettings } = this.props;

    return (
      <MainComponent statusBarSettings={statusBarSettings}>
        {children}
      </MainComponent>
    );
  }
}

export default connect(mapStateToProps)(Main);
