/**
 * The app route.
 *
 * @author Seven Du <shiwidu@outlook.com>
 */

import React from 'react';
import { Router } from 'react-router';
import Main from '../components/Main';

const rootRouter = {
  childRoutes: [
    {
      path: '/',
      component: Main
    }
  ]
};

const Routers = ({ history }) => {
  return (
    <Router history={history} routes={rootRouter} />
  );
};

export default Routers;
