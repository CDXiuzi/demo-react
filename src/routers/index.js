/**
 * The app route.
 *
 * @author Seven Du <shiwidu@outlook.com>
 */

import React from 'react';
import { Router } from 'react-router';
import Test from '../components/Test';

const rootRouter = {
  childRoutes: [
    {
      path: '/',
      component: Test
    }
  ]
};

const Routers = ({ history }) => {
  return (
    <Router history={history} routes={rootRouter} />
  );
};

export default Routers;
