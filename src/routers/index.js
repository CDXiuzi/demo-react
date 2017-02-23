/**
 * The app route.
 *
 * @author Seven Du <shiwidu@outlook.com>
 */

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Main from '../components/Main';
import Launcher from '../containers/Launcher';

// routers.
import auth from './auth.js';

const routes = [{
  path: '/',
  component: Main,
  indexRoute: { component: Launcher },
  childRoutes: [
    ...auth
  ],
}];

// Route Component.
const Routers = ({ history }) => {
  return (
    <Router history={history} routes={routes} />
  );
};

export default Routers;
