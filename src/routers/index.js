/**
 * The app route.
 *
 * @author Seven Du <shiwidu@outlook.com>
 */

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Main from '../components/Main';
import Launcher from '../containers/Launcher';

// Route Component.
const Routers = ({ history }) => {
  return (
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Launcher} />
      </Route>
    </Router>
  );
};

export default Routers;
