/**
 * The defined auth route.
 */

import AuthBase from '../containers/auth/Base';
import UserLogin from '../containers/auth/Login';

const routes = [
  {
    path: 'base',
    component: AuthBase
  },
  {
    path: 'login',
    component: UserLogin
  }
];

export default routes;
