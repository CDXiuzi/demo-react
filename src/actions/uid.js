/**
 * The logged user action.
 *
 * @author Seven Du <shiweidu@outlook.com>
 */

import { USER_UID } from './types';

const setUserID = (uid) => ({
  type: USER_UID,
  uid
});

export default setUserID;
