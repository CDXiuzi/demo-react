/**
 * The container component from "components/auth/Base.js"
 *
 * @author Seven Du <shiweidu@outlook.com>
 */

import React, { Component, PropTypes } from 'react';
import AuthBaseComponent from '../../components/auth/Base';
import { translucentStatusBar, whiteStatusBar } from '../../actions/statusBar';

class Base extends Component {

  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {

    const handleLoginClick = () => this.handleLoginClick();

    return (
      <AuthBaseComponent
        handleLogin={handleLoginClick}
      />
    );
  }

  handleLoginClick() {
    const { router } = this.props;
    const { push } = router;
    push('/login');
  }

  componentDidMount() {
    const { store } = this.context;
    store.dispatch(translucentStatusBar);
  }

  componentWillUnmount() {
    const { store } = this.context;
    store.dispatch(whiteStatusBar);
  }
}

export default Base;
