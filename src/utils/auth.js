/**
 * The util is user auth helper.
 */

import request from './request';

export const login = (access, password) => request.post('/sign/in', {
  phone: access,
  password
});
